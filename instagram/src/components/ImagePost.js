import axios from "axios";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const ImagePost = () => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("image", files[0]);
      console.log(formData);
      const newPost = await axios.post(
        `${process.env.REACT_APP_BURL}/create`,
        formData,
        { headers: { authorization: localStorage.getItem("userId") } }
      );
      alert("upload complete");
      console.log(newPost);
    } catch (error) {
      console.log({ error });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="upload"></label>
        <div {...getRootProps()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            width="100px"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
            <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
          </svg>
          <p>Drag and drop your image here</p>
        </div>
        <div>
          {files.map((file) => (
            <div key={file.name}>
              {console.log(file)}
              <div>
                <img
                  src={file.preview}
                  style={{ width: "200px" }}
                  alt="preview"
                />
              </div>
            </div>
          ))}
        </div>
        <label htmlFor="description"></label>
        <input
          placeholder="comments"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button>Upload</button>
      </form>
    </div>
  );
};

export default ImagePost;

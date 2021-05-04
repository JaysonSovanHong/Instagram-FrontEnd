
import axios from "axios"
import { useState } from "react"
import {useDropzone} from 'react-dropzone'

const ImagePost = () => {
    const [files, setFiles] = useState([])
    const [image, setImage] = useState('') 
    const [description, setDescription] = useState('')
    
    
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append('description', description); 
            formData.append('image',files[0])
            console.log(formData);
            const newPost = await axios.post(`${process.env.REACT_APP_BURL}/create`,formData, {headers:{authorization:localStorage.getItem("userId")}})
            alert('upload complete')
            console.log(newPost);
        } catch (error) {
            console.log({error});
        }
    }
    
    
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                }))
            )
        },
    })
    console.log(files[0]);
    
    return(
    <div>
        
       <form onSubmit={handleSubmit}>
           <label htmlFor="upload"></label>
            <div {...getRootProps()}>
                upload
            
            </div>
            <div>{files.map((file) => (
            <div key={file.name}>
            {console.log(file)}
            <div>
            <img src={file.preview} style={{ width: "200px" }} alt="preview" />
            </div>
                </div>
                ))}
            </div>
            <label htmlFor='description'></label>
            <input placeholder='description' id='description' value={description} onChange={(e) => setDescription(e.target.value)}  />
            <button>Upload</button>
            </form>
                
    </div>
    )
}

export default ImagePost
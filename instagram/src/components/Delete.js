import axios from "axios";

const Delete =()=>{
const deletePost = async () => {
    let response = await axios.delete(`${process.env.REACT_APP_BURL}/delete/${id}`)
    console.log(response);
}
    return(
        <div>
<button onClick={()=>{deletePost}}>Delete</button>

        </div>
    )
}

export default Delete;
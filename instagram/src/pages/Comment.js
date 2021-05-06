import axios from 'axios'
import { useState,useContext } from 'react'
import {UserContext} from '../Context/UserContext'

const Comment =()=>{
    const {userState} = useContext(UserContext) 
    const [user, setUser] = userState
    const [submitComment, setSubmitComment] = useState('')
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const newComment = await axios.post(`${process.env.REACT_APP_BURL}/user/update`,{
                headers:{ Authorization:user.id}
            })
            setSubmitComment(newComment)
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='submitComment'></label>
                
                <input htmlFor='submitComment' value={submitComment} placeholder='leave a comment 😊 ' onChange={(e)=>setSubmitComment(e.target.value)} />
            <button type="submit">Leave a comment</button>
        </form>

    )
    


}

export default Comment
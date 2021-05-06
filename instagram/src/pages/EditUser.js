import { useState,useContext } from 'react'
import {UserContext} from '../Context/UserContext'
import axios from "axios"



const EditUser = () => {
    const {userState} = useContext(UserContext) 
    const [user, setUser] = userState
    const [name, setName] = useState('')
    const [email, setEmail] = useState('') 
    const [image, setImage] = useState('')
    
const handleEdit = async(e) => {
    e.preventDefault()

    try {
        if(user.id){
            console.log('NAME INSIDE HANDLE EDIT: ',user);
            const editUser = await axios.post(`${process.env.REACT_APP_BURL}/user/update`,{
                headers:{ Authorization:user.id}
            },{
           name:user.name,
           email:user.email,
           image:user.image
           
            
            })
        }
    } catch (error) {
        console.log(error);
    }

}


return(

    <div>
        <form id='edit' onSubmit={handleEdit}>
                <div>
                    <label htmlFor='name'></label> 
                    <input id='name' placeholder='name' value={email} onChange={(e)=>setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor='email'></label> 
                    <input id='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
             
                <div>
                    <label htmlFor='image'></label>
                    <input placeholder='image' id='image' value={image} onChange={(e) =>setImage(e.target.value)} />
                </div>
                    <button id="edit" type='submit' value='submit'>Edit User</button>
        </form>
    </div>
                







)


}

export default EditUser
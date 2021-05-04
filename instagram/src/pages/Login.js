
import {useState, useContext} from 'react'
import axios from 'axios'
import {UserContext} from '../Context/UserContext'

const Login = () =>{
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {userState} = useContext(UserContext) 
    
    const [user, setUser] = userState
     

 
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const newUser = await axios.post(`${process.env.REACT_APP_BURL}/login`,{email,password
            })
                console.log(newUser.data.user.id);
                localStorage.setItem('userId', newUser.data.user.id)
                setUser( newUser.data.user)
            } catch (error) {
                
            }

}
        
    


    return(

        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'></label> 
                    <input id='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
             
                <div>
                    <label htmlFor='password'></label>
                    <input placeholder='Password' id='password' value={password} onChange={(e) =>setPassword(e.target.value)} />
                </div>
                    <button type='submit' value='submit'>Login</button>
                


            </form>
        </div>


    )
    
    
}
export default Login
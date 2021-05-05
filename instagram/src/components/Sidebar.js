import axios from "axios"
import { useContext, useEffect,useState } from "react"
import {UserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'


const Sidebar = () =>{
    const {userState} = useContext(UserContext) 
    const [user, setUser] = userState
    const [allUser,setAllUser] = useState([])
    const showUser = async () =>{
        try {
        const response = await axios.get(`${process.env.REACT_APP_BURL}/users`)
            
        setAllUser(response.data.user)
        // console.log(allUser);
        } catch (error) {
        console.log('can not find user');
        }
    }
    useEffect(showUser,[])

    return(
        
        <div>
        {user.name}<img src={user.image} width="50px" alt="user profile"></img>
        <div>
            <p>Suggestions For You</p>
            
            {allUser.map((users,u) =>{
                                
                return(
                    
                    <div key={u}>
                    <p>{users.name}</p>
                    <Link to={`/verify`}>  
                    <img src={users.image} width="50px" alt="user profile"></img></Link>  
                    </div>
                    
                    )
            })}
        </div>

        </div>
    )

}

export default Sidebar
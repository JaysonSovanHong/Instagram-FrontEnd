import { useContext } from "react"

import {UserContext} from '../Context/UserContext'

const Profile = () =>{
const {userState} = useContext(UserContext) 
const [user, setUser] = userState
    return(
        <div>
            
            <h1>{user.name}</h1>    
            
        </div>

    )
}

export default Profile
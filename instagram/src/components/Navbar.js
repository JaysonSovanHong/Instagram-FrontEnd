import { useContext } from 'react'
import {Link} from 'react-router-dom'
import{UserContext} from '../Context/UserContext'

const Navbar = () =>{
    const {userState} = useContext(UserContext)
    const [user,setUser] = userState

    return(

       <nav>
        <Link to='/'>Home-</Link>
        <Link to='/login'>Login-</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/signup'>Signup</Link>
        <span onClick={() =>{localStorage.removeItem('userId')
        setUser({})
        }}>-Logout</span>

       </nav>


    )
    
    
}

export default Navbar


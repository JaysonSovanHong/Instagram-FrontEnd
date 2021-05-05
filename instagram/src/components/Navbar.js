import { useContext } from 'react'
import {Link} from 'react-router-dom'
import{UserContext} from '../Context/UserContext'

const Navbar = () =>{
    const {userState} = useContext(UserContext)
    const [user,setUser] = userState

    return(
<div>
    {(user.id) ? 
       <nav>
         <Link to='/profile'><img src={user.image} width="40px"alt="profile pic"></img></Link>
        
        <Link to='/main'><svg xmlns="http://www.w3.org/2000/svg" width='40px'className="h-1 w-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg></Link>
        
        <span onClick={() =>{localStorage.removeItem('userId')
        setUser({})
        }}><svg xmlns="http://www.w3.org/2000/svg" width='40px'className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg></span>
       </nav>
       :
       <nav>
       
       <Link to='/login'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" width='40px' fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg></Link> 
        
        <Link to='/'><img src="https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo-1024x1024.jpg" width='35px'></img></Link>
        <Link to='/signup'></Link>
        
        </nav>
    }
       </div>

    )
    
    
}

export default Navbar


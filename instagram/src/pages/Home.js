import Login from './Login'
import {Link} from 'react-router-dom'

import home from '../images/home.png'



const Home  = () =>{
    
    return(
    <div className="homeMain">
        <div className="homeLogo">
        <img src={home} width="200px"></img>
        </div>
        
        <div className='homeLogin'>
        
        <Login />
        <span id="Forget">
        <a href="https://www.instagram.com/accounts/password/reset/">Forgot Password?</a>
        <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
        </span>
        </div>
        
       
       
        
        
    </div>

        
    )
    
    
}

export default Home
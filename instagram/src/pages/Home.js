import Login from './Login'
import {Link} from 'react-router-dom'

import home from '../images/home.png'
import logo from '../images/logo.png'


const Home  = () =>{
    
    return(
    <div className="homeScreen">
        <div className="homePic">
        <img src={home} width="200px"></img>
        </div>
        <div className="homeLogin">
        <img src={logo} width="100px"></img>
        <Login />
        <p>
        <a href="https://www.instagram.com/accounts/password/reset/">Forgot Password?</a>
        </p>
        
        <p>Don't have an account?<Link to='/signup'>Sign up</Link></p>
        

        </div>
        <div>
       

        </div>

    </div>

        
    )
    
    
}

export default Home
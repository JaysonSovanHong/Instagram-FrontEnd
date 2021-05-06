
import { useContext, useEffect, useState} from "react"
import {UserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'
import Comment from '../pages/Comment'



const Profile = () =>{
const {userState} = useContext(UserContext) 
const [user, setUser] = userState



  






console.log(user)
    return(
        <div id="profile">
            <div id="profileHeader">
                <div>
                    <img src={user.image} width="75px" alt="profile pic"></img>
                </div>
                <span>
                    {user.name}
                </span>
                <div>
                <Link to='/user/update'><img width="50px"src="https://static.thenounproject.com/png/125115-200.png"></img></Link>
                </div>
                    
               
                    
                
            </div>
               
                
        <div  id="profileMain">
            {user.posts.map((post,p)=>{
                return(
                    <div key={p} >
                        <img src={post.image} width="200px" alt="profile image"></img>
                    </div>
                 
                )
            })}
            </div>
        </div>
                
                
            
        

          
            
                          
            
            






        
        
        
        

    )
}

export default Profile
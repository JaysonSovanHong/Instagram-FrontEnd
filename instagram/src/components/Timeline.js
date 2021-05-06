
import { useContext, useEffect,useState } from "react"
import {UserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'
import Comment from '../pages/Comment'

const Timeline = ({posts}) =>{
    const {userState} = useContext(UserContext) 
    const [user, setUser] = userState


return(

  
    <div id="timeline">
        {posts.map((post, p) =>{

        return(
            <div key={p}>
            <div id='timelineMain'>
                <div id="timeline1" >
                    <p> {post.user.name}</p>
                        <img src={post.user.image} width="50px" alt="user profile"></img>
                </div> 
                
                <div id='timeline2'>
                    <Link to={`/post`}>
                    <img src={post.image} width="200px" alt="user profile"></img></Link>
                       <p>{post.description}</p> 
                </div>
            </div>
            <Comment />
            </div>        
                       
                       
                    
                  
                  
               

                )
                       
            })}
    </div>
        
    
    
    

    


    )

}

export default Timeline
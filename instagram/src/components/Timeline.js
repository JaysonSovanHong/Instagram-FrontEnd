import axios from "axios"
import { useContext, useEffect,useState } from "react"
import {UserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'

const Timeline = ({posts}) =>{
    const {userState} = useContext(UserContext) 
    const [user, setUser] = userState
//     const [allPost,setAllPost] = useState([])
//     const showPost = async () => {
//         try {
//             const response = await axios.get(`${process.env.REACT_APP_BURL}/posts`)
            
//             setAllPost(response.data.allposts);
//             console.log(allPost);
      
//         } catch (error) {
//             console.log('can not find post');
//         }

//     }
// useEffect(showPost,[])  

return(

  
        <div id="timeline">
            {posts.map((post, p) =>{

                return(
                    
                <div id='timelineMain'>
                    <div id="timeline1" key={p}>
                    <p> {post.user.name}</p>
                        <img src={post.user.image} width="50px" alt="user profile"></img>
                        
                       </div> 
                    
                  
                  
                  <div id='timeline2'>
                    <Link to={`/post`}>
                    <img src={post.image} width="200px" alt="user profile"></img></Link>
                       <p>{post.description}</p> 
                </div>
                </div>
                )
                       
            })}
    </div>
        
    
    
    

    


    )

}

export default Timeline

import { useContext, useEffect,useState } from "react"
import {UserContext} from '../Context/UserContext'
import axios from "axios"
import Post from "./Post"

const Timeline = ({posts}) =>{
    const {userState} = useContext(UserContext) 
    const [user, setUser] = userState
    const [comment, setComment] = useState('')
    const showComment = async () => {
        try {
            const oneComment = await axios.get(`${process.env.REACT_APP_BURL}/`, ) 
        } catch (error) {
            
        }

    }

return(

  
    <div id="timeline">
        {posts.map((post, p) =>{

        return(
            <Post post={post} key={p} />
            )
        })}
    </div>
            
           

                   
                       
                       
                    
                  
                  
               

                       
        
    
    
    

    


    )

}

export default Timeline
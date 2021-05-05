import {UserContext} from '../Context/UserContext'
import { useContext } from "react"



import Timeline from '../components/Timeline'
import Sidebar from '../components/Sidebar'
import ImagePost from '../components/ImagePost'

const Main = ({posts}) =>{
    const {userState} = useContext(UserContext) 
    const [user, setUser] = userState
    
    return(
    <div id='main'>
        <div className='container'> 
            <ImagePost />
          
        </div>
        
        <div className='grid'>
            <div className="gird1"><Timeline posts={posts}/>
            </div> 
            <div className="grid2"><Sidebar />
            </div>
        </div>   
    </div>

    )

}

export default Main
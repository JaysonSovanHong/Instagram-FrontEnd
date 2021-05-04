import {UserContext} from '../Context/UserContext'
import { useContext, useState } from "react"
import {useDropzone} from 'react-dropzone'

import Header from '../components/Header'
import Timeline from '../components/Timeline'
import Sidebar from '../components/Sidebar'

const Main = ({posts}) =>{
    const {userState} = useContext(UserContext) 
    const [user, setUser] = userState
    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
                )
                )
            },
        })
        const images = files.map((file) => (
            <div key={file.name}>
                <div>
                    <img src={file.preview} style={{ width: "200px" }} alt="preview" />
                </div>
            </div>
    ))

    return(
    <div>
        <div {...getRootProps()}>
            <input {...getInputProps()} />
                <p>Post and Image</p>
        </div>
        
        <div>{images}</div>   
            
        <div className='container'> 
            <Header />
        </div>
        
        <div className='grid'>
            <div className="gird1"><Timeline posts={posts}/></div> 
            <div className="grid2"><Sidebar /></div>
        </div>   
    </div>

    )

}

export default Main
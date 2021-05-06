import './App.css';
import {Route, Switch} from 'react-router-dom'
import {lazy, Suspense, useEffect,useContext, useState} from 'react'
import {UserContext} from './Context/UserContext'
import axios from 'axios';

import Navbar from './components/Navbar'
import EditUser from './pages/EditUser';



const Login = lazy(() => import('./pages/Login'))
const Home = lazy(()=> import('./pages/Home'))
const Signup = lazy(() => import('./pages/Signup') )
const Profile = lazy(()=> import('./pages/Profile') )
const Main = lazy(() => import('./pages/Main'))



function App() {
  const {userState, fetchUser} = useContext(UserContext)
  const [user,setUser] = userState
  const [allPost,setAllPost] = useState([])
    const showPost = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BURL}/posts`)
            
            setAllPost(response.data.allposts);
            console.log(allPost);
      
        } catch (error) {
            console.log('can not find post');
        }

    }
useEffect(showPost,[])  

  useEffect(fetchUser, [])

  
  return (
    <div>
          <Navbar user={user} setUser={setUser} />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
          <Route exact path='/' render={() =>{return <Home />}} />
          <Route exact path='/login' render={() =>{return <Login />}} />
          <Route exact path='/signup' render={() =>{return <Signup />}} />
          <Route exact path='/profile' render={() =>{return <Profile posts={allPost}/>} } />
          <Route exact path='/main' render={() =>{return <Main posts={allPost} />}} />
          <Route exact path='/user/update' render={() =>{return <EditUser />}} />
          </Suspense>
        </Switch>
    </div>
        
  );
}

export default App;

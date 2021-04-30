import './App.css';
import {Route, Switch} from 'react-router-dom'
import {lazy, Suspense, useEffect, useState,useContext} from 'react'
import {UserContext} from './Context/UserContext'

import Navbar from './components/Navbar'



const Login = lazy(() => import('./pages/Login'))
const Home = lazy(()=> import('./pages/Home'))
const Signup = lazy(() => import('./pages/Signup') )
const Profile = lazy(()=> import('./pages/Profile') )




function App() {
  const {userState, fetchUser} = useContext(UserContext)
  const [user,setUser] = userState
  

  useEffect(fetchUser, [])

  
  return (
    <div>
          <Navbar user={user} setUser={setUser} />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
          <Route exact path='/' render={() =>{return <Home />}} />
          <Route exact path='/login' render={() =>{return <Login />}} />
          <Route exact path='/signup' render={() =>{return <Signup />}} />
          <Route exact path='/profile' render={() =>{return <Profile />} } />
          </Suspense>
        </Switch>
    </div>
        
  );
}

export default App;

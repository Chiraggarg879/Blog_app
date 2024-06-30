import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  Routes,Route
} from "react-router-dom";

import Topbar from './components/topbar/TopBar' 
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './components/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

const App = () => {
  const user = false;
  return (
    <div>
    <Topbar></Topbar>
    <Routes>
      <Route path = '/' element = {<Home></Home>}></Route>
      <Route path = '/home' element = {<Home></Home>}></Route>
      <Route path = '/register' element ={
        user ? <Home></Home> : <Register></Register>
      }></Route>
      <Route path = '/login' element ={user ? <Home></Home> : <Login/>}></Route>
      <Route path = '/write' element ={user ? <Write/> : <Login/>}></Route> 
      <Route path = '/settings' element ={user ? <Settings/> : <Login/>}></Route> 
      <Route path = '/post:postId' element ={<Single/>}></Route> 
    </Routes>
    </div>
  )
}

export default App
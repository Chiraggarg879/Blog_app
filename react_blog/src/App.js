import React from 'react'
import Topbar from './components/topbar/TopBar' 
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './components/write/Write'

const App = () => {
  return (
    <div>
    <Topbar></Topbar>
    <Write></Write>
    {/* <Home></Home> */}
    {/* <Single></Single> */}
    </div>
  )
}

export default App
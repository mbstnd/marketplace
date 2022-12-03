import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Context  from './context/context.js'
import reactLogo from './assets/react.svg'

import Navbar from './components/Navbar.jsx'
import Home from './views/Home.jsx'
import Login from './views/Login.jsx'
import Registration from './views/Registration.jsx'
import Footer from './components/Footer.jsx'
import Profile from './views/Profile.jsx'
import Gallery from './views/Gallery.jsx'



function App() {
  
  const globalState = {}

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element= { <Home/> }></Route>
          <Route path='/login' element= { <Login/> }></Route>
          <Route path='/registration' element= { <Registration/> }></Route>
          <Route path='/profile' element= { <Profile/> }></Route>
          <Route path='/gallery' element= { <Gallery/> }></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App


import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Context  from './context/context.js'
import Navbar from './components/Navbar.jsx'
import Home from './views/Home.jsx'
import Login from './views/Login.jsx'
import Registration from './views/Registration.jsx'
import Footer from './components/Footer.jsx'
import Profile from './views/Profile.jsx'
import Gallery from './views/Gallery.jsx'
import Publication from './views/Publication.jsx'
import PublicationsList from './views/PublicationsList.jsx'
import Guitar from './views/Guitar.jsx'


function App() {
  
  const [guitars, setGuitars] = useState([]);
    const globalState = { guitars };

    
    useEffect(() => {
        getGuitars("./guitar.json")
    },[])

    const getGuitars = (data) => {
        console.log(data)
        fetch(data)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setGuitars(data)
        })
    }

  return (
    <div className="App">
      <Context.Provider value={ globalState }>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element= { <Home/> }></Route>
            <Route path='/login' element= { <Login/> }></Route>
            <Route path='/registration' element= { <Registration/> }></Route>
            <Route path='/profile' element= { <Profile/> }></Route>
            <Route path='/gallery' element= { <Gallery/> }></Route>
            <Route path='/publication' element= { <Publication/> }></Route>
            <Route path='/mypublications' element= { <PublicationsList/> }></Route>
            <Route path='/guitar/:id' element= { <Guitar/> }></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App

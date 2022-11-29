import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Context  from './context/context.js'
import reactLogo from './assets/react.svg'

import Navbar from './components/Navbar.jsx'
import Home from './views/Home.jsx'


function App() {

  const globalState = {}


  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App

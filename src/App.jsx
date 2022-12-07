
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
import Cart from './views/Cart.jsx'
import Payment from './views/Payment.jsx'
import NotFound from './views/Notfound.jsx'


function App() {  
  const [guitars, setGuitars] = useState([]);
  const [cart, setCart] = useState([{
    "desc": "La nueva Jaguar '70s Classic Vibe de Squier lleva también la marca distintiva del modelo, como la escala de 24”, selector y controles de doble circuito, puente vibrato flotante y acabados clásicos.",
    "id": "P002",
    "img": "https://www.fender.cl/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/g/e/ge477_0374090557v1.jpg",
    "specifications": ["Cápsulas: S/S", "Diapasón: Laurel Indio (Indian Laurel)", "Color: Surf Green"],
    "name": "Squier Jaguar® '70s",
    "price": 609.990
    }]);

    const globalState = { guitars, cart };

    
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
            <Route path= '/carrito' element= { <Cart/> }></Route>
            <Route path='/publication' element= { <Publication/> }></Route>
            <Route path='/mypublications' element= { <PublicationsList/> }></Route>
            <Route path='/guitar/:id' element= { <Guitar/> }></Route>
            <Route path= '/pagar' element= { <Payment/> }></Route>
            <Route path= '/*' element= { <NotFound/> }></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App

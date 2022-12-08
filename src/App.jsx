
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
  const [cart, setCart] = useState([]);

  const addToCart = (item)=>{
    const itemIndex = cart.findIndex((guitar)=> guitar.id === item.id)
    const updateCart = [...cart]

    console.log(addToCart)

    if (itemIndex === -1) {
      const guitar = {
        id: item.id,
        count: 1,
        price: item.price,
        img: item.img,
        name: item.name
      }

      updateCart.push(guitar)
    } else {
      updateCart[itemIndex].count += 1
    }

    setCart(updateCart)
  }

  const removeFromCart = (item)=>{
    const itemIndex = cart.findIndex((guitar)=> guitar.id === item.id)
    const updateCart = [...cart]

    updateCart[itemIndex].count -= 1

    if(updateCart[itemIndex].count <= 0) {
      updateCart.splice(itemIndex, 1)
    }

    setCart(updateCart)
  }
  
    
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


    const globalState = { guitars, cart, addToCart, removeFromCart };

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

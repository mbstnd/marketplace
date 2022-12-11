import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, isRouteErrorResponse } from 'react-router-dom'
import { formatPrice } from './utils/utils.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import  Context  from './context/context.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './views/Home.jsx'
import Login from './views/Login.jsx'
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
  const [allGuitars, setAllGuitars] = useState([]);
  const [searchedItem, setSearchedItem] = useState("")
  const [sortOrder, setSortOrder] = useState("")
  const [prices, setPrices] = useState([])
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
  
  const cartTotal = ()=> {
    let total = 0
    cart.forEach((item)=> total += item.count * item.price)

    return formatPrice(total)
  }
    
    useEffect(() => {
        getGuitars("./guitar.json")
    },[])

   
  
    const getGuitars = (data) => {
        
        fetch(data)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setGuitars(data)
           setAllGuitars(data)
            
        })

        
    }

    function onSearch(e) {
     
    setSearchedItem(e)
    
    const searchedGuitar = allGuitars.filter((guitar) => {
      return guitar.name.toLowerCase().includes(searchedItem.toLowerCase())})
      setGuitars(searchedGuitar)
      
}



function onSort(e) {
  setSortOrder(e)
  const sortedGuitars = [...guitars] 
    if(sortOrder === "asc"){
    sortedGuitars.sort((a,b) => b.price - a.price)
  } else {
    sortedGuitars.sort((a,b) => a.price - b.price)
  }
  return setGuitars(sortedGuitars)
}



    const globalState = { guitars, setGuitars, cart, addToCart, removeFromCart, cartTotal };

  return (
    <div className="App">
      <Context.Provider value={ globalState }>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element= { <Home/> }></Route>
            <Route path='/login' element= { <Login/> }></Route>
            <Route path='/profile' element= { <Profile/> }></Route>
            <Route path='/gallery' element= { <Gallery searchedItem ={searchedItem} onSearch={onSearch} onSort={onSort} sortOrder={sortOrder}/> } ></Route>
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

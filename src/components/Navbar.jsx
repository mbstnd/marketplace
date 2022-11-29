import { Link } from 'react-router-dom'
import Logo from '../assets/tuning-fork-white.png'

const Navbar = ()=> {
    return(
        <nav className='main-nav'>

            <Link to="/"> <img src={Logo} alt="" /></Link>
            <div className='nav-icons'>
            <Link to="/tienda"> <h3>Tienda</h3></Link>
            <Link to="/login"> <h3>Login</h3></Link>
            <Link to="/carrito"> <i className="fa-solid fa-cart-shopping"> $0</i></Link>
            </div>

        </nav>
    )

}

export default Navbar
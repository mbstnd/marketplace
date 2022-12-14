import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../context/context.js'
import Logo from '../assets/tuning-fork-white.png'

const Nav = ()=> {
    const { cartTotal } = useContext(Context)
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return(
        <nav className="main-nav">
            <Link to="/"> <img src={Logo} alt="" /></Link>
            <div className='nav-icons'>
            <Link to="/gallery">Tienda</Link>
            <Link to="/carrito"> <i className="fa-solid fa-cart-shopping"> ${cartTotal()}</i></Link>
            <button onClick={() => logout()}><i class="fa-solid fa-right-from-bracket"></i></button>
            </div>

        </nav>
    )

}

export default Nav
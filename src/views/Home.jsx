import Header from '../components/Header.jsx';
import { NavLink } from "react-router-dom";

const Home = ()=> {
    return(
        <div>
            <Header></Header>
            <main>
            <p className='text-home'>Somos Tritono Store, una Marketplace dedicada a la Compra y Venta de Instrumentos Musicales.</p>
                <div className='btns'>
                <NavLink className='btn btn-primary' to="/gallery">Comprar</NavLink> 
                    
                <NavLink className='btn btn-primary' to="/login">Vender</NavLink> 
                    
                </div>
            </main>
        </div>
    )
}

export default Home
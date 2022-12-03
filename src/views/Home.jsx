import Header from '../components/Header.jsx';
import { NavLink } from "react-router-dom";

const Home = ()=> {
    return(
        <div>
            <Header></Header>
            <main>
            <p className='text-home'>Somos Tritono Store, una Marketplace dedicada a la Compra y Venta de Instrumentos Musicales.</p>
                <div className='btns'>
                <button className='btn btn-primary'><NavLink className='navlink-btn' to="/gallery">Comprar</NavLink></button> 
                    {/* Agregue un navlink dentro del botón para navegar a la vista login  */}
                    <button className='btn btn-primary'><NavLink className='navlink-btn' to="/login">Vender</NavLink></button> 
                    
                </div>
            </main>
        </div>
    )
}

export default Home
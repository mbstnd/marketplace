import Header from '../components/Header.jsx'

const Home = ()=> {
    return(
        <div>
            <Header></Header>
            <main>
            <p className='text-home'>Somos Tritono Store, una Marketplace dedicada a la Compra y Venta de Instrumentos Musicales.</p>
                <div className='btns'>
                    <button className='btn btn-primary'>Comprar</button>
                    <button className='btn btn-primary'>Vender</button>
                </div>
            </main>
        </div>
    )
}

export default Home
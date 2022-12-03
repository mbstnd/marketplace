const Myprofile = () => {
    return (
        <div className="row">
            <aside>
                <h2>Ofertas que te podrían interesar</h2>
                <div className="image-aside">
                    <img src="https://comecs-spa.cl/wp-content/uploads/2022/06/Caja-de-30-50-p-as-de-guitarra-Alice-ac-stica-bajo-el-ctrico-Pic-Plectrum.jpg_Q90.jpg_.webp" alt="pack de uñetas" />
                    <h3>Pack de uñetas $6.990</h3>
                    <img src="https://images.promusic.cl/uploads/preview.jpg1000x1000.r.jpg" alt="pack de cuerdas" />
                    <h3>Pack de cuerdas $7.990</h3>
                </div>
            </aside>
            <section>
                <h2>Mi Perfil</h2>
                <div className="main-profile">
                    <img src="https://www.cinconoticias.com/wp-content/uploads/guitarristas-famosos.jpg" alt="guitarrist" />
                    <div className="text-profile">
                        <h3>Mi puntuación: <i className="fa-brands fa-diaspora"></i><i className="fa-brands fa-diaspora"></i><i className="fa-brands fa-diaspora"></i></h3>
                        <br/>
                        <h3>Medio de Pago: xx5523 <i className="fa-brands fa-cc-mastercard"></i></h3>
                        <br/>
                        <h3>Dirección: Av Siempreviva 546, Springfield.</h3>
                        <br/>
                    </div>
                </div>
                <div className="down-text">
                    <button className="down-button">Nueva Publicación</button>
                    <button className="down-button">Mis Publicaciones</button>
                </div>
            </section>
        </div>
    )
}

export default Myprofile
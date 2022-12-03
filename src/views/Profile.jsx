const Profile = () => {
    return (
        <div className="main-profile">
            <div className="profile">
                <h2>Bienvenida Ma Eugenia!</h2>
                <div className="profile-container">
                    <div className="profile-info">
                        <img className="avatar" src="https://images.unsplash.com/photo-1620330388384-31eddaadf267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80image.png"></img>
                        <div className="info">
                            <p>Mi puntuación</p>
                            <p>Medio de pago: xxxx5533</p>
                            <p>Dirección: Las Hualtatas 2342</p>
                        </div>
                    </div>
                    <div className="profile-links">
                        <div className="link new">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <p>Nueva publicación</p>
                        </div>
                        <div className="link publications">
                            <i class="fa-solid fa-bullhorn"></i>
                            <p>Nueva publicación</p> 
                        </div>
                        <div className="link my-cart">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p>Mis compras</p>
                        </div>
                    </div>

                </div>
            </div>
            <aside className="additional-products">
                <h3>Ofertas imperdibles:</h3>
                <div className="aside-product">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_785862-MLC47757592647_102021-O.jpg"></img>
                    <p>Juego de uñetas</p>
                    <p>$15.000</p>
                </div>
                <div className="aside-product">
                    <img src="https://cf.shopee.cl/file/eab007df844ad7715561643a3f7fbb71"></img>
                    <p>Pack de cuerdas</p>
                    <p>$30.000</p>
                </div>
                <div className="aside-product">
                    <img src="https://cf.shopee.cl/file/eab007df844ad7715561643a3f7fbb71"></img>
                    <p>Pack de cuerdas</p>
                    <p>$30.000</p>
                </div>
            </aside>
        </div>
        
    )
}

export default Profile
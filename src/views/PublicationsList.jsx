import { useContext } from "react"
import { formatPrice } from '../utils/utils.js'
import Context from "../context/context.js"

const PublicationsList = () => {
    const { publicaciones } = useContext(Context)

    return (
    <div className="main-publications">
        <ul>
            
                {
                    publicaciones.length !==  0 ?
                    publicaciones.map((publicacion) => {
                    return(
                        <li className="item-publication" key={publicacion.id}>🎸 <span>Vendedor: </span>{publicacion.nombre} <span className="bars">||</span><span>Condición:</span> {publicacion.status} <span className="bars" >||</span> <span>Modelo:</span> {publicacion.model} <span className="bars">||</span> <span>Precio:</span>$ { formatPrice(publicacion.price) }</li>  
                    )
                }
                )
                : <p className="empty-cart">😔 Aun no tienes productos en venta 😔</p>
                }
            
        </ul>  
    </div>
    )
}

export default PublicationsList
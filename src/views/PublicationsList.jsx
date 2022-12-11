import { useContext } from "react"
import Context from "../context/context.js"

const PublicationsList = () => {
    const { publicaciones } = useContext(Context)

    return (
    <div className="main-publications">
        <ul>
            
                {
                    publicaciones.map((publicacion) => {
                    return(
                        <li className="item-publication" key={publicacion.id}>🎸 <span>Vendedor: </span>{publicacion.nombre} <span className="bars">||</span><span>Condición:</span> {publicacion.status} <span className="bars" >||</span> <span>Modelo:</span> {publicacion.model} <span className="bars">||</span> <span>Precio:</span> {publicacion.price} </li>  
                    )
                }
                )
                }
            
        </ul>  
    </div>
    )
}

export default PublicationsList
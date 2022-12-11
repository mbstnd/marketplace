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
                        <li className="item-publication" key={publicacion.id}>🎸{publicacion.nombre} || {publicacion.status} || {publicacion.price} || {publicacion.model}</li>  
                    )
                }
                )
                }
            
        </ul>  
    </div>
    )
}

export default PublicationsList
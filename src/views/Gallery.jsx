
import Card from "../components/Card.jsx"
import { useContext } from "react"
import Context from "../context/context.js"

const Gallery = () => {
    const { guitars } = useContext(Context)
    
    return (
        <div className="container-gallery">
        <aside className="filter-aside">
            <p>Ingresa palabra clave</p>
            <input type="text"></input>
            <button className="btn-filter">Filtrar</button>  
        </aside>
        <div className="container row row-cols-2 row-cols-md-2  m-4 g-4 main-gallery">
            {
                guitars.map((guitar) => {
                    return (
                        <Card guitar={ guitar } key={guitar.id}></Card>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Gallery;
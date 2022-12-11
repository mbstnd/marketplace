import { useContext } from "react"
import Card from "../components/Card.jsx"
import Context from "../context/context.js"

const Gallery = ({searchedItem, onSearch, onSort, sortOrder}) => {
    const { guitars } = useContext(Context)

    return (
        <div className="container-gallery">
        <aside className="filter-aside">
           
                <div className="filtro" >
                <input type="text" placeholder=" Filtra" value={searchedItem} onChange={e => onSearch(e.target.value)}  ></input>
                <button className="btn-filter">Filtra</button>
                </div>
                <div className="filtro"  >
                <select value ={sortOrder} onChange={e => onSort(e.target.value)} >
                    <option value="0">Ordena</option>
                    <option value="asc">Menor precio</option>
                    <option value="desc">Mayor precio</option>
                </select>
                <button className="btn-filter">Borrar filtros</button>
                </div>
             
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
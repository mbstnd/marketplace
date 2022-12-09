
import Card from "../components/Card.jsx"
import { useContext, useState, useEffect } from "react"
import Context from "../context/context.js"

const Gallery = ({filtro}) => {
    const { guitars } = useContext(Context)
    /*const [input, setInput] = useState("");*/

    /*

    useEffect(() => {
        filterData()
    }, [input])

    function filterData() {
        const filtered = allGuitars.filter((guitar) => guitar.name === input)
        setAllGuitars(filtered)
        console.log(setAllGuitars)
    }
*/

    return (
        <div className="container-gallery">
        <aside className="filter-aside">
            <form className="filtro" onSubmit={(e) => filtro(e)}>
                
                <input type="text" placeholder=" Buscar" name="filtro"  ></input>
                <button className="btn-filter" >Filtrar</button>
            </form>  
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

import { useState, useEffect } from 'react'
import Card from "../components/Card.jsx"

const Gallery = () => {
    const [guitars, setGuitars] = useState([]);

    
    useEffect(() => {
        getGuitars("./guitar.json")
    },[])

    const getGuitars = (data) => {
        console.log(data)
        fetch(data)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setGuitars(data)
        })
    }
    
    return (
        <div className="container-gallery">
        <aside className="filter-aside">
              <input type="text"></input>
              <button className="btn-filter">Filtrar</button>  
        </aside>
        <div className="container row row-cols-2 row-cols-md-2  m-4 g-4 main-gallery">
            {
                guitars.map((guitar) => {
                    return (
                        <Card guitar={ guitar }></Card>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Gallery;
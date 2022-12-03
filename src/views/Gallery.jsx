
import { useState, useEffect } from 'react'

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
                        <div className="card m-2 " key={ guitar.id }>
                            <img src={ guitar.img } className="card-img-top" alt={ guitar.name }></img> 
                                <div className="card-body">
                                    <h5 className="card-title">{ guitar.name }</h5>
                                    <p className="card-text">{ guitar.price }</p>
                                </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Gallery;
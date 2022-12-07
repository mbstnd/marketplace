import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"

import Context from "../context/context"

const Guitar = () => {
    const { id } = useParams()
    const { guitars } = useContext(Context)

    const [ guitar, setGuitar ] = useState({})

    useEffect(()=> {
        const guitar = guitars.filter((item)=> item.id === id)
        setGuitar(guitar[0])

    }, [])

    return (
        <main>
            <div className="detail-guitar">
                <section className="image-detail" style={{backgroundImage: `url(${guitar.img})`}}>
                </section>
                <article className="content">
                    <h4>{ guitar.name }</h4>
                    <h5 className="desc">{ guitar.desc }</h5>
                    <h5> { guitar.specifications } </h5>

                    <div className="price-row">
                        <h3>Precio: $ { guitar.price }</h3>

                        <button className="btn btn-primary">Añadir</button>
                    </div>
                </article>
            </div> 
        </main>
    )
}

export default Guitar
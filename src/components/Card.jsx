import { useNavigate } from "react-router-dom"

import { formatPrice } from "../utils/utils.js"

const Card = ({guitar}) => {
    const navigate = useNavigate()

    const viewGuitar = (id)=> navigate(`/guitar/${id}`)

    return (
        <div className="card m-2 " key={ guitar.id }>
            <img src={ guitar.img } className="card-img-top" alt={ guitar.name }></img> 
            <div className="card-body">
                <h5 className="card-title">{ guitar.name }</h5>
                <p className="card-text">$ { formatPrice(guitar.price) }</p>
            </div>
            <div className="buttons">
                <button className="card-btn" onClick={()=> viewGuitar(guitar.id)}>+</button>
                <button className="card-btn">🛒</button>

            </div>
        </div>
    )
}

export default Card
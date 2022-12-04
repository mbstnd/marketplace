const Card = ({guitar}) => {
    return (
        <div className="card m-2 " key={ guitar.id }>
            <img src={ guitar.img } className="card-img-top" alt={ guitar.name }></img> 
            <div className="card-body">
                <h5 className="card-title">{ guitar.name }</h5>
                <p className="card-text">$ { guitar.price }</p>
            </div>
            <div className="buttons">
                <button className="card-btn">+</button>
                <button className="card-btn">🛒</button>

            </div>
        </div>
    )
}

export default Card
import { Link } from 'react-router-dom'

const CartList = ({ cart })=> {
    return(
        <div>
            <ul>
                { 
                    cart.map((guitar)=>{
                        return(
                            <li key={guitar.id}>
                                <div className="product">
                                    <img src={ guitar.img } alt={ guitar.name }/>
                                    <h4>{ guitar.name }</h4>
                                </div>
                                <div className="price">
                                    <h4>$ { guitar.price }</h4>
                                    <div className="btns">
                                        <button className='btn btn-primary'>-</button>
                                        <h4>1</h4>
                                        <button className='btn btn-primary'>+</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="total">
                <h3>Total: $0</h3>
                <Link to="/pagar" className='btn btn-primary'>Ir a pagar</Link>
            </div>

        </div>
    )
}

export default CartList
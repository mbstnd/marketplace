import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/utils.js'

const CartList = ({ cart, addToCart, removeFromCart, cartTotal })=> {
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
                                    <h4>$ { formatPrice(guitar.price * guitar.count) }</h4>
                                    <div className="btns">
                                        <button className='btn btn-primary' onClick={()=> removeFromCart(guitar)}>-</button>
                                        <h4>{ guitar.count }</h4>
                                        <button className='btn btn-primary' onClick={()=> addToCart(guitar)}>+</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="total">
                <h3>Total: ${ cartTotal() }</h3>
                <Link to="/pagar" className='btn btn-primary'>Ir a pagar</Link>
            </div>
        </div>
    )
}

export default CartList
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
    
    const cartContextGlobal = useContext(CartContext);

    return (
        <>
        { cartContextGlobal.getCantidadArticulos() > 0   &&
            <Link to="/carrito">
                <button class="btn">                 
                    <img src="/images/cart.png" alt="" width="43" height="35" class="d-inline-block align-text-top" />                
                        <span class="position-absolute top-50 start-90 translate-middle badge rounded-pill bg-danger">
                            {cartContextGlobal.getCantidadArticulos()}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                </button>
            </Link>        
        }
        </>
    )
}
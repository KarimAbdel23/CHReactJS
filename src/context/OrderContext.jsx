import { createContext, useState, useContext } from 'react';
import { CartContext } from './CartContext';
import  { addOneOrder } from '../utils/dataaccess';


export const OrderContext = createContext();

export const OrderContextComponent = ({children}) => {

    const cartContextGlobal = useContext(CartContext);

    const [orderList, setOrderList] = useState([]);
    
    function createOrder(name, phone, email) {
        let cartList = cartContextGlobal.getCartList();
        let totalCart = cartContextGlobal.getTotal();
        let userInfo = { name, phone, email };
        const newOrder = { 
            buyer: userInfo, 
            items: cartList, 
            date: Date.now(), 
            total:totalCart
        }
        setOrderList([...orderList, newOrder]);
        addOneOrder(newOrder).then(() => 
            console.log
        )
        
    }

    return(
        <OrderContext.Provider value={createOrder}>
            {children}
        </OrderContext.Provider>
    )

}
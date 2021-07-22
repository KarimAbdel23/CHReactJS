import { createContext, useState, useContext } from 'react';
import { CartContext } from './CartContext';
import  { addOneOrder } from '../utils/dataaccess';


export const OrderContext = createContext();

export const OrderContextComponent = ({children}) => {

    const cartContextGlobal = useContext(CartContext);

    const [orderList, setOrderList] = useState([]);
    
    function createOrder(name, phone, email) {
        let cartList = cartContextGlobal.getCartList().map((element) => {
            console.log(element);
            return {
                id: element.item.id, 
                title: element.item.title, 
                price: element.item.price,
                quantity:element.quantity
            }
        });
        let totalCart = cartContextGlobal.getTotalSinFormato();
        let userInfo = { name, phone, email };
        const newOrder = { 
            buyer: userInfo, 
            items: cartList, 
            date: Date.now(), 
            total:totalCart
        }   
        cartContextGlobal.clear();  
        return addOneOrder(newOrder);
        /*   
        addOneOrder(newOrder).then(response => { 
            console.log(response) 
            console.log(response.id);       
            newOrder.id = response.id;
            setOrderList([...orderList, newOrder]);
            cartContextGlobal.clear();
        })
        */
    }

    return(
        <OrderContext.Provider value={createOrder}>
            {children}
        </OrderContext.Provider>
    )

}
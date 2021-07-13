import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {

    const [cartList, setCartList] = useState([]);

    function addItem(item, quantity) {        
        setCartList([...cartList, {item, quantity}]);
    }

    function removeItem(itemId) {
        //const deleteItem = cartList.find(element => element == itemId);

        setCartList(arrayRemove(cartList, itemId));
        /*
        var filtered = array.filter(function(value, index, arr){ 
            return value > 5;
        });
        */
    }

    function clear() {
        setCartList([]);
    }

    function isInCart(itemId) {               
        let cart = cartList.find(element => element == itemId);
        if(cart !== null && cart !== ''  && cart!==undefined) 
            return true;
        else
            return false;
    }

    function arrayRemove(arr, itemId) { 
    
        return arr.filter(function(ele){ 
            return ele.itemId != itemId; 
        });
    }

    return(
        <CartContext.Provider value={'hola'}>
            {children}
        </CartContext.Provider>
    )
}
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {

    const [cartList, setCartList] = useState([]);

    var contextOperations = {
     
        getCartList: () => {
            return cartList;
        },
        addItem: (item, quantity) => {
            console.log('Enter in contextOperations -- addItem');
            console.log('Enter in contextOperations -- addItem item.id -- ' + item.id);
            let intQuantity = +quantity;
            //parseInt("15", 10);
            if (isInCart(item.id))
            {                
                const elementIndex = cartList.findIndex(element => element.item.id == item.id );
                let newCartList = [...cartList];
                const cartItem = cartList.find(element => element.item.id == item.id);
                cartItem.quantity += intQuantity;
                newCartList[elementIndex] = cartItem;
                setCartList(newCartList);
            }
            else
            {
                setCartList([...cartList, {item, quantity: intQuantity }]);
            }
            console.log('Exit in contextOperations -- addItem');
            console.log(cartList);
        },
        removeItem: (itemId) => {
            console.log('Enter in contextOperations -- removeItem');
            setCartList(arrayRemove(cartList, itemId));
            console.log('Exit in contextOperations -- removeItem');
            console.log(cartList);
        },
        clear:  () => {
            console.log('Enter in contextOperations -- clear');
            setCartList([]);
            console.log('Exit in contextOperations -- clear');
            console.log(cartList);
        },
        getSubTotal: () => {            
            return (subTotal()).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
        },
        getCostoEnvio: () => {            
            return (costoEnvio()).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
        },
        getTotal: () => {
            return (subTotal() + costoEnvio()).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
        },
        getCantidadArticulos: () => {
            let cantidad = 0;
            cartList.forEach(element => {
                let quantity = element.quantity;
                cantidad += quantity;
            });
            return cantidad;
        }
    };

    function subTotal() {
        let subTotal = 0;
        cartList.forEach(element => {
            let pricePerQuantity = element.quantity * element.item.price;
            subTotal += pricePerQuantity;
        });
        return subTotal;
    }

    function costoEnvio() {
        let costoenvio = 0;
        cartList.forEach(element => {
            let pricePerEnvio = element.quantity * 49.99;
            costoenvio += pricePerEnvio;
        });
        return costoenvio;
    }

    function isInCart(itemId) {               
        console.log('Enter in isInCart');
        let cart = cartList.find(element => element.item.id == itemId);
        if(cart !== null && cart !== ''  && cart!==undefined) 
        {
            console.log('Exit in isInCart -- true');
            return true;
        }
        else
        {
            console.log('Exit in isInCart -- false');
            return false;
        }
    }

    function arrayRemove(arr, itemId) {     
        return arr.filter(function(ele){ 
            if (ele.item.id != itemId)
                return ele;           
        });
    }  
    
    return(
        <CartContext.Provider value={contextOperations}>
            {children}
        </CartContext.Provider>
    )
}
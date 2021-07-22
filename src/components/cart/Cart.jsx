import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ItemCart } from "./ItemCart"

export const Cart = () => {

  const cartContextGlobal = useContext(CartContext);

  if (cartContextGlobal.getCantidadArticulos() <= 0)
   return (
        <table class="table">
             <tbody>
             <tr>
                <td><h1>No hay articulos en el carrito</h1></td>
              </tr>
              <tr>
                <td> <button className="btn btn-dark">
                        <Link to={'/componentes/procesadores'}> Ir a procesadores </Link>
                    </button>        </td>
              </tr>
             </tbody>
        </table>
   )
  else 
    return (
    <>      
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">#</th>            
            <th scope="col">Imagen</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          { cartContextGlobal.getCartList().map( (element, index) => {
              return <ItemCart key={element.item.id} rowCart={element} index={index + 1} deleteRowCart={cartContextGlobal.removeItem} />
            })
          }
        </tbody>
        <tfoot>
            <tr>
              <td rowSpan="3" colSpan="3">                
                  Cantidad de Articulos: {cartContextGlobal.getCantidadArticulos()}
              </td>

              <td rowSpan="3" >
                <button type="button" class="btn btn-danger" onClick={() => { cartContextGlobal.clear(); }} >
                  Vaciar carrito
                </button>
                <button type="button" class="btn btn-success"  >
                  <Link to={'/validarcompra'}>  Pagar Compra </Link>

                </button>
              </td>           

              <td colSpan="2">SubTotal:</td>
              <td>{cartContextGlobal.getSubTotal()}</td>
            </tr>
            <tr>
              <td colSpan="2">Costo de envío:</td><td>{cartContextGlobal.getCostoEnvio()}</td>
            </tr>
            <tr>
              <td colSpan="2">Total:</td><td>{cartContextGlobal.getTotal()}</td>
            </tr>
        </tfoot>
      </table>

    </>
  );
};

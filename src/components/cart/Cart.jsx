import { ItemCart } from "./ItemCart"

export const Cart = () => {
  return (
    <>
      <h1>Componente Cart</h1>
      <h2>Este componente muestra un listado</h2>
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
           <ItemCart />
        </tbody>
      </table>
      
    </>
  );
};

import './ItemDetail.css';
import { ItemCount } from '../itemcount/ItemCount';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({item, category}) => {
    
    const estadoGlobal = useContext(CartContext)
    const [existencias, setStock] = useState(10);
    const [showMe, setShowMe] = useState(false);

    //console.log(estadoGlobal);    

    useEffect(() => {
        setStock(item.stock);
        
    }, [item.stock])

    function onAdd(quantityToAdd) {
        console.log('valor de stock: ' + existencias);
        setStock(existencias - quantityToAdd );        
        setShowMe(true);

        estadoGlobal.addItem(item, quantityToAdd);
        console.log('valor de quantityToAdd: ' + quantityToAdd);
        console.log('valor de item.stock: ' + item.stock);
        console.log('valor de stock: ' + existencias);       
    }

    return (        
        <div class="border border-secondary border-2 rounded">
            <div class="row">
                <div class="col">
                    <img src={item.pictureBigUrl} className="imagebig"  alt="..."  />
                </div>
                <div class="col">
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">Procesador</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
                            <p class="card-text"> {item.description}</p>
                            <p class="card-text"> SKU: {item.SKU}</p>
                            <p class="card-text"> Disponibles: {existencias} pzs. </p>
                            
                            {!showMe &&  <ItemCount stock={existencias} initial="1" onAdd={onAdd}  ></ItemCount> }
                               
                             {showMe && <button className="btn btn-success">
                                        <Link to="/carrito" className="text-white" >Terminar tu compra</Link>
                                    </button>}
                                    

                        </div>
                    </div>
                </div>    
            </div>
            <div class="row">
                <div class="col">                    
                    <spam>Más información</spam>
                    <br/>
                    <button className="btn btn-dark">
                        <Link to={'/componentes/' + category}> Regresar </Link>
                    </button>                    
                    <br/>
            
            
                </div>
                <div class="col">
                    <div class="card" >
                        <spam>Características</spam>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Familia de procesador: {item.brand}  {item.family}</li>
                            <li class="list-group-item">Modelo del procesador: {item.model}</li>
                            <li class="list-group-item">Frecuencia del procesador: {item.frequency}</li>
                            <li class="list-group-item">Socket de procesador: {item.socket}</li>
                            <li class="list-group-item">Número de núcleos: {item.cores}</li>                            
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
    )
}


/*

        <button type="button" class="btn btn-danger" onClick={estadoGlobal.clear} >Borrar Contexto</button><br/>
                    <br/>
                    <button type="button" class="btn btn-warning" onClick={() => estadoGlobal.removeItem(item.id) }>Eliminar Item</button>
                    <br/>
                    
<ItemCount stock={stock} initial="1" onAdd={ (counterAux) => {  alert('cantidad elementos agregados al carrito: ' + counterAux  ) } }  ></ItemCount>
*/
import './ItemDetail.css';
import { ItemCount } from '../itemcount/ItemCount';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({item, category}) => {
    
    const estadoGlobal = useContext(CartContext);
    const [existencias, setStock] = useState(10);
    const [showMe, setShowMe] = useState(false);    

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
            <div className="border border-secondary border-2 rounded">
                <div className="row">
                    <div className="col">
                        <img src={item.pictureBigUrl} className="imagebig"  alt="..."  />
                    </div>
                    <div className="col">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Procesador</h5>
                                <h6 className="card-subtitle mb-2 text-muted">${item.price}</h6>
                                <p className="card-text"> {item.description}</p>
                                <p className="card-text"> SKU: {item.SKU}</p>
                                <p className="card-text"> Disponibles: {existencias} pzs. </p>
    
                                {!showMe &&  <ItemCount stock={existencias} initial="1" onAdd={onAdd}  ></ItemCount> }
                                   
                                 {showMe && <button className="btn btn-success">
                                            <Link to="/carrito" className="text-white" >Terminar tu compra</Link>
                                        </button>}
                                        
    
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="row">
                    <div className="col">                    
                        <spam>Más información</spam>
                        <br/>
                        <button className="btn btn-dark">
                            <Link to={'/componentes/' + category}> Regresar </Link>
                        </button>                    
                        <br/>
                
                
                    </div>
                    <div className="col">
                        <div className="card" >
                            <spam>Características</spam>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Familia de procesador: {item.brand}  {item.family}</li>
                                <li className="list-group-item">Modelo del procesador: {item.model}</li>
                                <li className="list-group-item">Frecuencia del procesador: {item.frequency}</li>
                                <li className="list-group-item">Socket de procesador: {item.socket}</li>
                                <li className="list-group-item">Número de núcleos: {item.cores}</li>                            
                            </ul>
                        </div>
                    </div>    
                </div>
            </div>
            )
      
}
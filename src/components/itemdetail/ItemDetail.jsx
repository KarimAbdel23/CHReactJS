import './ItemDetail.css';
import { ItemCount } from '../itemcount/ItemCount';

export const ItemDetail = ({item}) => {
 
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
                            
                            <ItemCount stock="5" initial="1" onAdd={ (counterAux) => {  alert('cantidad elementos agregados al carrito: ' + counterAux  ) } }  ></ItemCount>
                        </div>
                    </div>
                </div>    
            </div>
            <div class="row">
                <div class="col">                    
                    <spam>Más información</spam>
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
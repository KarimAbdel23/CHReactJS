import { useState } from "react"

export const ItemCount = ({stock, initial, onAdd}) => {    
    const [counter, setCounter ] = useState(initial);    
    
    if ( stock <= 0 )    
       return  ( 
                   <p><spam class="fs-4 fw-bold">Lo sentimos, por el momento este producto está agotado.</spam></p>
                )    
    else
        return (       
        <>        
           
           
            <div class="row">
                <div class="col-4"></div>
                <div class="col-1">
                    <button class="btn btn-secondary" onClick={() => setCounter(counter == initial ? initial : counter - 1)}>
                        <i class="fa fa-minus"></i>
                    </button>
                </div>
                <div class="col-2">
                    <input  type="text" class="form-control" value={counter}  />
                </div>
                <div class="col-1">
                    <button class="btn btn-secondary" onClick={() => setCounter((counter == stock) ? stock : +counter + 1)}>
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
                <div class="col-4"></div>                
            </div>    
            <br />
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <button type="button" class="btn btn-warning fw-bold" onClick={ () => onAdd(counter)  }>Añadir al carrito</button>
                </div>
                <div class="col-4"></div>
            </div>
        </>
    )
}


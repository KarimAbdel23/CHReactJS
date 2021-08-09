import { useState } from "react"

export const ItemCount = ({stock, initial, onAdd}) => {    
    const [counter, setCounter ] = useState(initial);    
    
    if ( stock <= 0 )    
       return  ( 
                   <p><spam className="fs-4 fw-bold">Lo sentimos, por el momento este producto está agotado.</spam></p>
                )    
    else
        return (       
        <>        
           
           
            <div className="row">
                <div className="col-4"></div>
                <div className="col-1">
                    <button className="btn btn-secondary" onClick={() => setCounter(counter == initial ? initial : counter - 1)}>
                        <i className="fa fa-minus"></i>
                    </button>
                </div>
                <div className="col-2">
                    <input  type="text" className="form-control" value={counter}  />
                </div>
                <div className="col-1">
                    <button className="btn btn-secondary" onClick={() => setCounter((counter == stock) ? stock : +counter + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
                <div className="col-4"></div>                
            </div>    
            <br />
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <button type="button" className="btn btn-warning fw-bold" onClick={ () => onAdd(counter)  }>Añadir al carrito</button>
                </div>
                <div className="col-4"></div>
            </div>
        </>
    )
}


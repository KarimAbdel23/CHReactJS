import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../utils/dataaccess";
import { ItemDetail } from "../components/itemdetail/ItemDetail";

export const ItemDetailContainer = () => {    
    const { categoryId } = useParams();
    const { idProducto } = useParams();
    let [producto, setProducto] = useState({});
    
    useEffect( () => {        
        getOneProduct(idProducto).then(
            result => { 
                console.log(idProducto);
                setProducto(result);
            }
        )
    }, [idProducto]);

    return(
        <div className="container">            
            <div className="container">
                <ItemDetail item={producto} category={categoryId} ></ItemDetail>
            </div>
        </div>
    )
}
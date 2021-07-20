import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems, getOneProduct } from "../utils/dataaccess";
import { ItemDetail } from "../components/itemdetail/ItemDetail";

export const ItemDetailContainer = () => {    
    const { categoryId } = useParams();
    const { idProducto } = useParams();
    let [producto, setProducto] = useState({});
    
    useEffect( () => {
        /*
        getItems(categoryId).then(
            result => { 
                setProducto(result.find(element => element.id == idProducto));
                //console.log(result[0]);
             }
        )
        */
        getOneProduct(idProducto).then(
            result => { 
                console.log(idProducto);
                setProducto(result);
            }
        )
    }, [idProducto]);

    return(
        <div class="container">            
            <div class="container">
                <ItemDetail item={producto} category={categoryId} ></ItemDetail>
            </div>
        </div>
    )
}
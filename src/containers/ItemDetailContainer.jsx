import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../utils/dataaccess";
import { ItemDetail } from "../components/itemdetail/ItemDetail";

export const ItemDetailContainer = () => {    
    const { categoryId } = useParams();
    const { idProducto } = useParams();
    let [producto, setProducto] = useState({});
    
    useEffect( () => {
        //getItems().then( result => { setProducto(result); });

        getItems(categoryId).then(
            result => { 
                setProducto(result.find(element => element.id == idProducto));
             }
        )
    });

    return(
        <div class="container">            
            <div class="container">
                <ItemDetail item={producto} category={categoryId} ></ItemDetail>
            </div>
        </div>
    )
}
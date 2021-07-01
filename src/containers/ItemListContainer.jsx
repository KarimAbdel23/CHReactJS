//import { ItemCount }  from './../components/itemcount/ItemCount'

import { useEffect, useState } from "react"
import { ItemList } from '../components/itemlist/ItemList';
import  { getItems } from '../utils/dataaccess';

export const ItemListContainer = (props) => {

    let [productos, setProductos] = useState([]);

    useEffect( () => {
        const waitForData =  () => {
            //let data =  
            getItems().then(
                result => {
                    setProductos(result);
            });
            //let aux = data.map(ele)            
        }

        waitForData();
    }, [])

    return (
        <div >            
            <span class="badge bg-primary text-wrap fs-2" > {props.saludos} </span>  
            <ItemList items={productos}></ItemList>
        </div>
    )
}
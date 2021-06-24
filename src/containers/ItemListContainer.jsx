//import { ItemCount }  from './../components/itemcount/ItemCount'

import { useEffect, useState } from "react"
import { ItemList } from '../components/itemlist/ItemList';
import  { getData } from '../utils/dataaccess';

export const ItemListContainer = (props) => {

    let [productos, setProductos] = useState([]);

    useEffect( () => {
        const waitForData =  () => {
            //let data =  
            getData().then(
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
            {props.children}

            <ItemList items={productos}></ItemList>
        </div>
    )
}
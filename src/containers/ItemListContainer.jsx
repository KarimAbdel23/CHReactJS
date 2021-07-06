import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemList } from '../components/itemlist/ItemList';
import  { getItems } from '../utils/dataaccess';

export const ItemListContainer = (props) => {
    const { categoryId } = useParams();

    let [productos, setProductos] = useState([]);
    
    let subtitulo = "";
    if (categoryId == "memoriaram")
        subtitulo = "Memeoria Ram";
    else
        subtitulo = "Procesadores";

    useEffect( () => {
        const waitForData =  () => {
            //let data =  
            getItems(categoryId).then(
                result => {
                    setProductos(result);
            });
            //let aux = data.map(ele)            
        }

        waitForData();
    });

    return (
        <div >            
            <span class="badge bg-primary text-wrap fs-2" > {subtitulo} </span>  
            <ItemList items={productos} category={categoryId} ></ItemList>
        </div>
    )
}
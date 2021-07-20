import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemList } from '../components/itemlist/ItemList';
import  { getDataFromFS, getItems, getSubtitleByCategory } from '../utils/dataaccess';

export const ItemListContainer = (props) => {
    const { categoryId } = useParams();

    let [productos, setProductos] = useState([]);
    
    let subtitulo = getSubtitleByCategory(categoryId);
    /*
    if (categoryId == "memoriaram")
        subtitulo = "Memeoria Ram";
    else
        subtitulo = "Procesadores";
*/
    useEffect( () => {
        
        const waitForData =  () => {            
            /*
            getItems(categoryId).then(
                result => {
                    setProductos(result);
            });  
            */ 
            getDataFromFS(categoryId).then(result => setProductos(result));            
        }

        waitForData();        
    }, [categoryId]);

    return (
        <div >            
            <span class="badge bg-primary text-wrap fs-2" > {subtitulo} </span>  
            <ItemList items={productos} category={categoryId} ></ItemList>
        </div>
    )
}
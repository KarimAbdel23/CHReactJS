import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemList } from '../components/itemlist/ItemList';
import  { getDataFromFS, getSubtitleByCategory } from '../utils/dataaccess';

export const ItemListContainer = (props) => {
    const { categoryId } = useParams();

    let [productos, setProductos] = useState([]);
    
    let subtitulo = getSubtitleByCategory(categoryId);

    useEffect( () => {
        getDataFromFS(categoryId).then(result => setProductos(result));            
    }, [categoryId]);

    return (
        <div >            
            <span className="badge bg-primary text-wrap fs-2" > {subtitulo} </span>  
            <ItemList items={productos} category={categoryId} ></ItemList>
        </div>
    )
}
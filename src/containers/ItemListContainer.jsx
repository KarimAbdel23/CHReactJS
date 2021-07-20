import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemList } from '../components/itemlist/ItemList';
import  { getDataFromFS, getItems } from '../utils/dataaccess';

export const ItemListContainer = (props) => {
    const { categoryId } = useParams();

    let [productos, setProductos] = useState([]);
    
    let subtitulo = "";
    if (categoryId == "memoriaram")
        subtitulo = "Memeoria Ram";
    else
        subtitulo = "Procesadores";

    useEffect( () => {
     
/*
        const computersDB = getFirestore();
        const COLLECTION = computersDB.collection("productos");
        COLLECTION.get().then(response => {
            console.log(response.docs.map(element => element.data()));
        });
*/
        const waitForData =  () => {            
            /*
            getItems(categoryId).then(
                result => {
                    setProductos(result);
            });  
            */ 
            getDataFromFS('procesadores').then(result => setProductos(result));            
        }

        waitForData();        
    }, []);

    return (
        <div >            
            <span class="badge bg-primary text-wrap fs-2" > {subtitulo} </span>  
            <ItemList items={productos} category={categoryId} ></ItemList>
        </div>
    )
}
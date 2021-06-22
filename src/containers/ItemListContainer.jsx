//import { ItemCount }  from './../components/itemcount/ItemCount'

export const ItemListContainer = (props) => {
    return (
        <div >            
            <span class="badge bg-primary text-wrap fs-2" > {props.saludos} </span>  
            {props.children}
        </div>
    )
}
import { Item } from '../item/Item';

export const ItemList = ({items, category}) => {

    if (items.length == 0) 
        return (
            <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        )
    else
        return (
            <div class="container">
                <div class="card-group">
                <div class="row row-cols-1 row-cols-md-4 g-4">            
                    
                    {items.map(element => {
                        let newItem = {
                            id: element.id, 
                            title: element.title,
                            price: element.price,
                            pictureUrl: element.pictureUrl
                        };                        
                        return (
                            <spam key={newItem.id}>
                                <Item item={newItem} categoryId={category} ></Item>
                            </spam>
                        )
                    })}
                </div>
                </div>
            </div>
        )
}
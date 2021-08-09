import { Item } from '../item/Item';

export const ItemList = ({items, category}) => {

    if (items.length == 0) 
        return (
            <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
            </div>
        )
    else
        return (
            <div className="container">
                <div className="card-group">
                <div className="row row-cols-1 row-cols-md-4 g-4">            
                    
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
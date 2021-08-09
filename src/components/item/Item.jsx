import { Link } from 'react-router-dom';

export const Item = ({item, categoryId}) => {

    return (
      <div className="col">
        <div className="card h-100">
            <img src={item.pictureUrl} className="card-img-top img-thumbnail"  alt="..."  />
              <div className="card-body">
              <h5 className="card-title">{item.title}</h5>              
              <p className="card-text">{item.price}</p>
               <Link to={'/componentes/' + categoryId + '/' + item.id} >Ver detalle</Link>
              </div>
        </div>
      </div>
    )

}
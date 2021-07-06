import { Link } from 'react-router-dom';


export const Item = ({item, categoryId}) => {

    return (
      <div class="col">
        <div class="card h-100">
            <img src={item.pictureUrl} class="card-img-top img-thumbnail"  alt="..."  />
              <div class="card-body">
              <h5 class="card-title">{item.title}</h5>              
              <p class="card-text">{item.price}</p>               
               <Link to={'/componentes/' + categoryId + '/' + item.id} >Ver detalle</Link>
              </div>
        </div>
      </div>
    )

}

/*
<button className="btn btn-success" > Ver Detalle </button>
<Link to={'/componentes/procesadores/' + item.id} >Ver detalle</Link>
*/
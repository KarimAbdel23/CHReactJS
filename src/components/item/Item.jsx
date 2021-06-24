export const Item = ({item}) => {

    return (
      <div class="col">
        <div class="card h-100">
            <img src={item.pictureUrl} class="card-img-top" alt="..."  />
              <div class="card-body">
              <h5 class="card-title">{item.title}</h5>              
              <p class="card-text">{item.price}</p>
              </div>
        </div>
      </div>
    )

}
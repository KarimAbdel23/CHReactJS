export const ItemCart = ({index, rowCart, deleteRowCart}) => {

    return (
        <tr>
            <td>
                <button class="btn btn-dark" onClick={() => { deleteRowCart(rowCart.item.id); } } >
                    <i class="fa fa-minus"></i>
                </button> 
            </td>
            <td >{index}</td>
            <td><img src={rowCart.item.pictureUrl} class="card-img-top img-thumbnail" alt="" /> </td>
            <td>{rowCart.item.description}</td>
            <td>{rowCart.quantity}</td>
            <td>${rowCart.item.price}</td>
            <td>${rowCart.item.price * rowCart.quantity}</td>
      </tr>
    )
}
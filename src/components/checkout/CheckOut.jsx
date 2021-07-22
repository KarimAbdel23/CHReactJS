import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext"

export const CheckOut = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [switchComponent, setSwitchComponent] = useState(false);
    const [ordenId, setOrdenId] = useState('');

    const createOrderContext = useContext(OrderContext);

    const createOrderLocal = (name, phone, email) => {
        createOrderContext(name, phone, email).then(response => { 
            console.log(response) 
            console.log(response.id);       
            //newOrder.id = response.id;
            //setOrderList([...orderList, newOrder]);
            //cartContextGlobal.clear();
            setSwitchComponent(true);
            setOrdenId(response.id);
        }) ;
    }

    if (switchComponent)
    {
        return (
            <div className="card">
                <p> La orden de compra se genero correctamente. </p>
                <p> Tu clave de la orden es: </p>
                <p> {ordenId} </p>
                <Link className="btn btn-success" to={'/inicio'}> Regresar al inicio </Link>
            </div>
        )
    }
    else
    {
        return (
            <div className="card">
                <form>            
                    <div class="mb-1">
                        <label for="inputName1" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" id="inputName1" onInput={(e) => { setName(e.target.value)} } />
                    </div>
                    <div class="mb-1">
                        <label for="inputEmail1" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="inputEmail1" onInput={(e) => { setEmail(e.target.value)} } aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-1">
                        <label for="inputPhone1" class="form-label">Telefono:</label>
                        <input type="tel" class="form-control" id="inputPhone1" onInput={(e) => { setPhone(e.target.value)} } />
                    </div>
                    <button type="button" class="btn btn-success" onClick={() => { createOrderLocal(name, phone, email); }} >Aceptar Compra</button>
                    </form>
            </div>
        )
    }
}
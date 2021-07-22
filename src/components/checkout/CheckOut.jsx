import { useContext, useState } from "react"
import { OrderContext } from "../../context/OrderContext"

export const CheckOut = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const createOrder = useContext(OrderContext);

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
                <button type="button" class="btn btn-success" onClick={() => { createOrder(name, phone, email); }} >Aceptar Compra</button>
                </form>
        </div>
    )

}
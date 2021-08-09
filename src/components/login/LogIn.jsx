
import 'firebase/auth'
import { useEffect, useState } from 'react';
//import { useFirebaseApp } from 'reactfire'
import { createAccount2, getUser, signOut, signIn } from '../../firebase/client2'

export const LogIn = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    let user = getUser();

    useEffect(()=> {
        console.log(user && user.email);
    }, [user]);
    /*
    const firebase = useFirebaseApp();
*/

function onFulfilled (value) {
    console.log('Entra en onFulfilled');
    console.log(user && user.email);
    user = getUser();
    console.log(user && user.email);
}

function onRejected(reason) {
    console.log('Entra en onRejected');
    console.log(reason);
}

const registerUser = () => {    
    console.log('Entra en registerUser');
    createAccount2(email, pass).then(onFulfilled, onRejected);
}

const logIn = () => {    
    console.log('Entra en logIn');
    signIn(email, pass).then(onFulfilled, onRejected);    
}

const logOut = () => {    
    console.log('Entra en logOut');
    signOut().then(onFulfilled, onRejected);    
}


    return (
        <div className="card">
            
            <form>
                {
                !getUser() &&
                    <div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Correo</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ (ev) => setEmail(ev.target.value) }/>                    
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={ (ev) => setPass(ev.target.value) }  />
                        </div>        
                        <div className="mb-3">                
                            <button type="button" className="btn btn-success" onClick={logIn} >Iniciar sesion</button>
                        </div>        
                        <button type="button" className="btn btn-primary" onClick={registerUser}>Registrarse</button>
                    </div>
                }
                {
                    getUser() && <p> usuario logeado: { user.email }</p>
                }
                {
                    getUser() && <button type="button" className="btn btn-danger" onClick={logOut} >Cerrar sesion</button>
                }
            </form>
        </div>
    )

}
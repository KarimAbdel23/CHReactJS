import { CartWidget } from "../cartwidget/CartWidget"
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    

    return (        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="/images/huevito-oro-mini.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    KarComputers
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">                        
                        <NavLink className="nav-link active" aria-current="page" to="/inicio">Inicio</NavLink>
                    </li>
                    <li className="nav-item">                        
                        <NavLink className="nav-link" to="/acceder">Acceder</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Componentes
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>                            
                            <NavLink className="dropdown-item" to="/componentes/tarjetasmadre">Tarjetas Madre</NavLink>
                        </li>
                        <li>                                                         
                            <NavLink className="dropdown-item" to="/componentes/procesadores">Procesadores</NavLink>
                        </li>
                        <li>                            
                            <NavLink className="dropdown-item" to="/componentes/memoriaram">Memoria Ram</NavLink>
                        </li>
                        <li>                            
                            <NavLink className="dropdown-item" to="/componentes/tarjetasvideo">Tarjetas de Video</NavLink>
                        </li>
                        <li>                            
                            <NavLink className="dropdown-item" to="/componentes/discosduros">Discos Duros</NavLink>
                        </li>
                        <li>                            
                            <NavLink className="dropdown-item" to="/componentes/fuentespoder">Fuentes de Poder</NavLink>
                        </li>
                        <li>                            
                            <NavLink className="dropdown-item" to="/componentes/gabinetes">Gabinetes</NavLink>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>                            
                            <NavLink className="dropdown-item" to="/componentes/otros">Otros</NavLink>
                        </li>
                    </ul>
                    </li>                 
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>

                <CartWidget />

                </div>
            </div>
        </nav>                  
    )
}
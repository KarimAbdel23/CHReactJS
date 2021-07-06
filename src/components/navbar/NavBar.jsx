import { CartWidget } from "../cartwidget/CartWidget"
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="/images/huevito-oro-mini.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    KarComputers
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">                        
                        <NavLink class="nav-link active" aria-current="page" to="/inicio">Inicio</NavLink>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/">Ingresar</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Componentes
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="/">Tarjetas Madre</a></li>
                        <li>                                                         
                            <NavLink className="dropdown-item" to="/componentes/procesadores">Procesadores</NavLink>
                        </li>
                        <li>                            
                            <NavLink className="dropdown-item" to="/componentes/memoriaram">Memoria Ram</NavLink>
                        </li>
                        <li><a class="dropdown-item" href="/">Tarjetas de Video</a></li>
                        <li><a class="dropdown-item" href="/">Discos Duros</a></li>
                        <li><a class="dropdown-item" href="/">Fuentes de Poder</a></li>
                        <li><a class="dropdown-item" href="/">Gabinetes</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="/">Otros</a></li>
                    </ul>
                    </li>                 
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>

                <CartWidget />

                </div>
            </div>
        </nav>                  
    )
}


/*

           <a class="navbar-brand" href="/">
                    <img src="/images/huevito-oro-mini.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    KarComputers
                </a>

*/
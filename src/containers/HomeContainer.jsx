import { Link } from 'react-router-dom';

export const HomeContainer = () => {
    return(
        <>
               <h1>Bienvenidos a KarComputers</h1>

                <button className="btn btn-dark">
                    <Link to={'/componentes/procesadores'}> Ir a Procesadores </Link>
                </button>

            <header className="App-header">
                

                <img src="/images/huevito-oro-mini.jpg" className="App-logo" alt="logo" />
                <span> KARIM ABDEL RAMIREZ BARRERA</span>
                <br />
                <span>Version 0.03</span>
                <br />
                CLON DE <a href="https://www.newegg.com/" > https://www.newegg.com/ </a>
            </header>
        </>
    )
}
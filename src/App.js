
import './App.css';
import { NavBar } from './components/navbar/NavBar'
import { ItemListContainer } from './containers/ItemListContainer'
import { ItemCount }  from './components/itemcount/ItemCount'

function App() {
  return (
    <div className="App">

      <NavBar />

      <ItemListContainer saludos="Bienvenidos a KarComputers">
        <ItemCount stock="5" initial="1" onAdd={ (counterAux) => {  alert('cantidad elementos agregados al carrito: ' + counterAux  ) } }  ></ItemCount>    
      </ItemListContainer>
      
      <header className="App-header">
        <img src="/images/huevito-oro-mini.jpg" className="App-logo" alt="logo" />
        <span> KARIM ABDEL RAMIREZ BARRERA</span>
        <br />
        <span>Version 0.03</span>
        <br />
        CLON DE <a href="https://www.newegg.com/" > https://www.newegg.com/ </a>
      </header>
    </div>
  );
}

export default App;

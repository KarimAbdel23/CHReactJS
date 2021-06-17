
import './App.css';
import { NavBar } from './components/navbar/NavBar'
import { ItemListContainer } from './containers/ItemListContainer'

function App() {
  return (
    <div className="App">

      <NavBar />

      <ItemListContainer saludos="Bienvenidos a KarComputers"></ItemListContainer>

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

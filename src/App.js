import logo from './logo.svg';
import './App.css';
//import { NavBar } from './components/navbar/navbar';
import { NavBar } from './components/navbar/NavBar'

function App() {
  return (
    <div className="App">

      <NavBar />

     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <span> KARIM ABDEL RAMIREZ BARRERA</span>
        <br />
        <span>Version 0.02</span>
        <br />

        CLON DE <a href="https://www.newegg.com/" > https://www.newegg.com/ </a>
      </header>
    </div>
  );
}

export default App;

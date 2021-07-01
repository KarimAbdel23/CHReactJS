
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import { HomeContainer } from './containers/HomeContainer';

function App() {
  return (
    <div className="App">

      <NavBar />

      

      <BrowserRouter>   
        <Switch>          
          <Route  exact  path="/" component={HomeContainer} />
          <Route  exact  path="/componentes/procesadores/" component={() => <ItemListContainer saludos="Procesadores" />} />
          <Route path="/componentes/procesadores/:idProducto" component={ItemDetailContainer} />
        </Switch>
      </BrowserRouter>

 

      
      
    
    </div>
  );
}

export default App;

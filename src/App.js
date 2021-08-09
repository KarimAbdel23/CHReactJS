
import './App.css';
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { MainContainer } from './containers/MainContainer';
import { HomeContainer } from './containers/HomeContainer';
import { CartContainer } from './containers/CartContainer';
import { CartComponentContext } from './context/CartContext';
import { OrderContextComponent } from './context/OrderContext';
import { CheckOutContainer } from './containers/CheckOutContainer';
import { LoginContainer } from './containers/LoginContainer';

function App() {
  return (
    <div className="App">
      <CartComponentContext>
         <OrderContextComponent>
          <BrowserRouter>
            <Switch>            
              <Route  exact  path="/" component={ () => <MainContainer></MainContainer>} />
              <Route  exact  path="/inicio" component={ () => <MainContainer><HomeContainer/></MainContainer>} />
              <Route  exact  path="/acceder" component={ () => <MainContainer><LoginContainer/></MainContainer>} />
              <Route  exact  path="/carrito" component={ () => <MainContainer><CartContainer/></MainContainer>} />
              <Route  exact  path="/validarcompra" component={ () => <MainContainer><CheckOutContainer/></MainContainer>} />              
              <Route  exact  path="/componentes/:categoryId" component={() => <MainContainer><ItemListContainer saludos="" /> </MainContainer>} />
              <Route path="/componentes/:categoryId/:idProducto" component={ () => <MainContainer><ItemDetailContainer/></MainContainer>} />
            </Switch>
          </BrowserRouter>
        </OrderContextComponent>
      </CartComponentContext>
    </div>
  );
}

export default App;


/*

<Route  exact  path="/componentes/procesadores/" component={() => <MainContainer><ItemListContainer saludos="Procesadores" /> </MainContainer>} />
          <Route  exact  path="/componentes/memoriaram/" component={() => <MainContainer><ItemListContainer saludos="Memoria Ram" /> </MainContainer>} />

<Route  exact  path="/" component={() => <MainContainer><ItemListContainer saludos="Procesadores" /> </MainContainer>} />
            <Route  exact  path="/category/:id" component={() => <MainContainer><ItemListContainer saludos="Procesadores" /> </MainContainer>} />
            <Route path="/item/:id" component={ () => <MainContainer><ItemDetailContainer/></MainContainer>} />
          
*/
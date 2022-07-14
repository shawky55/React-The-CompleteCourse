import Welcome from './pages/Welcome';
import Products from './pages/Product';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
    <>
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productName">
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

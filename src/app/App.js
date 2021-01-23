import './App.scss';
import Spinner from "./components/spinner/spinner";
import { Route, Switch } from "react-router-dom";

import {
  ProductManagement, AddProduct,
  Checkout
} from './screen/index'

function App() {
  return (
    <div className="default-theme">
      <Spinner>
        <Switch>

          <Route exact path="/" component={ProductManagement} />
          <Route exact path="/product/new" component={AddProduct} />

          <Route exact path="/checkout" component={Checkout} />

        </Switch>
      </Spinner>
    </div >
  );
}

export default App;

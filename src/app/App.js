import './App.scss';
import Spinner from "./components/spinner/spinner";
import { Route, Switch } from "react-router-dom";

import {
  ProductManagement, AddProduct
} from './screen/index'

function App() {
  return (
    <div className="default-theme">
      <Spinner>
        <Switch>

          <Route exact path="/" component={ProductManagement} />
          <Route exact path="/product/new" component={AddProduct} />

        </Switch>
      </Spinner>
    </div >
  );
}

export default App;

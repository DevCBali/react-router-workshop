import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

// import * as serviceWorker from "./serviceWorker";

const AppRouter = () => (
  <Router>
    <Fragment>
      <Route path="/" exact component={ProductList} />
      <Route path="/products/" component={ProductList} />
      <Route path="/cart/" component={Cart} />
    </Fragment>
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

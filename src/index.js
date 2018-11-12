import React, { Fragment, Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LocaleContext } from './contexts';

function LazyImport(Component) {
  const ComponentLoadable = React.lazy(Component);
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentLoadable {...props} />
    </Suspense>
  );
}

const ProductList = LazyImport(() => import('./pages/ProductList'));
const Product = LazyImport(() => import('./pages/Product'));

function AppRouter() {
  const [locale, setLocale] = useState('en');

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Router>
        <Fragment>
          <Route path="/" exact component={ProductList} />
          <Route path="/products/" component={ProductList} />
          <Route path="/product/:product" component={Product} />
        </Fragment>
      </Router>
    </LocaleContext.Provider>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));

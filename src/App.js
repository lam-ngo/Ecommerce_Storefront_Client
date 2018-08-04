import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// IMPORT PAGES
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink
            to={'/'}
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
          >
            Home
          </NavLink>
          <NavLink
            to={'/shop'}
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
          >
            Products
          </NavLink>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/products'} component={ProductsPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

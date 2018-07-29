import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

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
            Shop
          </NavLink>
          <Route exact path={'/'} component={Home} />
          <Route path={'/shop'} component={Shop} />
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Shop = () => (
  <div>
    <h2>Shop</h2>
  </div>
);

export default App;

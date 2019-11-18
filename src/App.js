import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import FoodList from './components/FoodList';
import FoodDetails from './components/FoodDetails';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <FoodList />
      <FoodDetails />
      <Cart />
      <Default />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import FoodList from './components/FoodList';
import FoodDetails from './components/FoodDetails';
import Cart from './components/Cart';
import Default from './components/Default';
import Home from './components/Home';
import Offers from './components/Offers';
import Register from './components/Register';

function App() {
  return (
    <React.Fragment>
     <NavBar />
    <Switch>
      <Route path="/foodList" component={FoodList} />
      <Route path="/foodDetails" component={FoodDetails} />
      <Route path="/cart" component={Cart} />
      <Route path="/offers" component={Offers} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Home} />
      <Route component={Default} />
     
    </Switch>
    </React.Fragment> 
  );
}

export default App;

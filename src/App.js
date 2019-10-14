import React, { Component } from 'react'
import './App.css';
import Cart from './components/Cart' ;
import Default from './components/Default' ;
import Details from './components/Details' ;
import Navbar from './components/Navbar' ;
import ProductList from './components/ProductList' ;
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route, Link} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path='/' component={ProductList} />
              <Route path='/Cart' component={Cart} />
              <Route path='/Details' component={Details} />
              <Route path='/Details' component={Details} />
              <Route path='/Default' component={Default} />
             
        </Switch>
      </React.Fragment>
    )
  }
}

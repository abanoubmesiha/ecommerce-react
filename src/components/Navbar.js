import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import {ProductConsumer} from '../Context';

export default class Navbar extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    
                    return ( 
                            <nav className="navbar-expand-sm bg-primary navbar-dark px-sm-5">
                                <div className="d-flex bd-highlight mb-3 align-items-center">
                                <span className="navbar-brand mb-0 h4"><img src={logo} /></span>
                                    <div className="p-2 ml-3 bd-highlight nav-item">
                                        <Link to="/"><button type="button" className="btn btn-primary" >Products</button></Link>
                                        </div>
                                    <div className="ml-auto p-2 bd-highlight">
                                        <Link to="/Cart"><button type="button" className="btn btn-warning" >
                                            <i className="fas fa-cart-plus"></i> My Cart ({value.handleCartLength()})</button></Link>
                                            </div>
                                </div>
                            </nav>
                    
                    )}}
            </ProductConsumer>
        )
    }
}

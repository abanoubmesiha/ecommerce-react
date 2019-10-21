import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Product.scss";
import {ProductConsumer} from '../Context';

export default class Product extends Component {
  
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <React.Fragment>
               
              
                    <div className="card my-4">
                        <ProductConsumer>
                            {(value) => {
                                return <div className="img-container" onClick={value.handleGetDetailProduct.bind(this,id)}>
                            <Link to="/Details"><img src={img} className="card-img-top" alt="..." /></Link>
                            {value.handleIncart(id)?<span className="btn btn-primary disabled">
                                            <i className="fas fa-shopping-cart" /> In Cart
                                            </span> : 
                                                <span className="btn btn-primary" 
                                                        onClick={value.addToCart.bind(this,id)}>
                                            <i className="fas fa-shopping-cart" /> Add to Cart
                                            </span>}
                            
                            </div>
                            }}
                            
                       </ProductConsumer>
                        <div className="card-footer">

                        <span className="text-muted">{title}</span>
                        <span className="text-muted float-right">${price}</span>
                        </div>
                    </div>
                    
            </React.Fragment>
        )
    }
}

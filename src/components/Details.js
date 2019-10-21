import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,title,img,price,company,info} = value.detailProduct
                    return <div className="container">
                        <h1 className="text-center">{title}</h1>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img src={img} alt="product" />
                                
                            </div>
                            <div className="col-12 col-md-6 h5">
                                <h3>Price : ${price}</h3>
                                <p> {info}</p>
                                <footer class="blockquote-footer ">Manufactured By: <cite title="company">{company}</cite></footer>
                               <Link to="/">
                               <button className="btn btn-primary my-3 mx-1">
                                   Back To Products</button>
                                   </Link>
                                   {value.handleIncart(id)? <button className="btn btn-warning my-3 disabled">
                                       In Cart</button> :
                               <Link to="/Cart">
                               <button className="btn btn-warning my-3" 
                                        onClick={value.addToCart.bind(this,id)}>
                                            Add To Cart</button>
                                   </Link>}
                            </div>
                        </div>
                    </div>
                    } }
            </ProductConsumer>
        )   
    }
}

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Product.scss";

export default class Product extends Component {
  
    render() {
        const {id,title,img,price,company,info,inCart,count,total} = this.props.product;
        return (
            <React.Fragment>
               
              
                    <div class="card my-4">
                        <div className="img-container">
                        <Link to="/Details"><img src={img} class="card-img-top" alt="..." /></Link>
                      {inCart?<span className="btn btn-primary disabled">
                                    <i class="fas fa-shopping-cart" /> In Cart</span> :<span className="btn btn-primary">
                                    <i class="fas fa-shopping-cart" /> Add to Cart</span>}
                       
                       </div>
                        <div class="card-footer">

                        <span class="text-muted">{title}</span>
                        <span class="text-muted float-right">${price}</span>
                        </div>
                    </div>
                    
            </React.Fragment>
        )
    }
}

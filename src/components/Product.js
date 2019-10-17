import React, { Component } from 'react'
import "./Product.scss";

export default class Product extends Component {
  
    render() {
        const {id,title,img,price,company,info,inCart,count,total} = this.props.product;
        return (
            <React.Fragment>
               
              
                    <div class="card my-4">
                        <div className="img-container">
                        <img src={img} class="card-img-top" alt="..." />
                      
                       <span className="btn btn-primary"><i class="fas fa-shopping-cart" /> Add to Cart</span>
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

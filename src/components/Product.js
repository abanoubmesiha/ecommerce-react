import React, { Component } from 'react'
import "./Product.css";

export default class Product extends Component {
  
    render() {
        const {id,title,img,price,company,info,inCart,count,total} = this.props.product;
        return (
            <React.Fragment>
               
               <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img src={img} className="img-card-top"
                        style={{height:"14rem"}} alt="recipe" />
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning text-slanted">provided by {company}</h6>
                        </div>
                        <div className="card-footer">
                            <button type="button"
                                    className="btn btn-primary text-capitalize">details</button>
                            <a href={id} className="btn btn-success mx-2 text-capitalize"
                             target="_blank" rel="noopener noreferrer">
                                recipe url
                            </a>
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}

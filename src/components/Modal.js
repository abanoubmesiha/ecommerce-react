import React, { Component } from 'react'
import {ProductConsumer} from '../Context';
import './Modal.scss';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                const  {id, title, price, img} = value.detailProduct;
                    if (!value.modalStatus) {return null}
                    else { return <div id="modal" className="container-fluid">
                       <span className="content">
                        <h4>Item Added To Cart</h4>
                        <img src={img} alt="product" />
                        <h3>{title}</h3>
                        <p className="font-weight-bold">Price:${price}</p>
                        <span>
                            <Link to="/">
                                <button className="btn btn-primary mx-4 my-2"
                                        onClick={value.closeModal.bind(this)}>Back</button></Link>
                            <Link to="/Cart">
                                <button className="btn btn-warning"
                                        onClick={value.closeModal.bind(this)}>Go To Cart</button>
                                </Link></span>
                   </span></div>}
                    
                }}
            </ProductConsumer>
        )
    }
}

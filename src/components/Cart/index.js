import React, { Component } from 'react'
import EmptyCart from './EmptyCart';
import FullCart from './FullCart';
import CartColumns from './CartColumns';
import {ProductConsumer} from '../../Context';
import Totals from './Totals';

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    if (value.cart === undefined || value.cart.length == 0) {
                        return <EmptyCart />
                } else {
                    return (
                        <div className="container">
                                <CartColumns />
                                <FullCart value={value} />
                                <Totals value={value}/>
                        </div>
                        )}}}
                
                
                
                
            </ProductConsumer>
        )
    }
}

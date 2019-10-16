import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import Product from './Product';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {(value)=> {return <div>{value.map(product => (<Product product={product} key={product.id} />))}</div>;}} 
                </ProductConsumer>
            </React.Fragment> 
        )
    }
}

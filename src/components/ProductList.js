import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import Product from './Product';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
              <div className="container d-flex justify-content-around">
                    <ProductConsumer>
                        {(value)=> {
                            return <div className="card-deck">
                            {value.products.map(product => (
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <Product product={product} key={product.id} />
                                </div>))}</div>;}} 
                    </ProductConsumer>
              </div>
            </React.Fragment> 
        )
    }
}

import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import Product from './Product';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="container my-5">
                 {/*title */}
                     <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">Product list</h1>
                        </div>
                    </div>
                    {/*end of title*/}
                    <div className="row">
                    
                    <ProductConsumer>
                     {(value)=> {return <div>{value.map(product => (<Product product={product} key={product.id} />))}</div>;}} 
                </ProductConsumer>
                    </div>
                </div>
                
            </React.Fragment> 
        )
    }
}

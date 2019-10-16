import React, { createContext, Component } from 'react';
import {storeProducts} from './data'; 

const TheContext = React.createContext();
const {Provider, Consumer} = TheContext;

class ProductProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
           products: storeProducts
        };
    }
render() {
    return (
        <Provider value={this.state.products}>
            {this.props.children}
        </Provider>
    );
}}

export { ProductProvider as default , Consumer as ProductConsumer };
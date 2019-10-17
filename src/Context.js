import React, { createContext, Component } from 'react';
import {storeProducts} from './data'; 
import { functionDeclaration } from '@babel/types';

const TheContext = React.createContext();
const {Provider, Consumer} = TheContext;

class ProductProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
           products: storeProducts,
          detailProduct:{}
        };
        this.handleClickedId=this.handleClickedId.bind(this);
        this.handleGetDetailProduct=this.handleGetDetailProduct.bind(this);
    }
    handleClickedId(id){
        this.setState({
            clickedId:id
        });
        console.log(`function is working and ${this.state.clickedId} state is working`);
        
    }
    handleGetDetailProduct(id){
        console.log(`function is working and ${id} is working`);
        function finder(x){
           return x.id === id;
        }
        const product = this.state.products.find(finder);
        this.setState({
            detailProduct:product
        })
    }
render() {
    return (
        <Provider value={{
            ...this.state,
            handleClickedId:this.handleClickedId,
            handleGetDetailProduct:this.handleGetDetailProduct
            }}>
            {this.props.children}
        </Provider>
    );
}}

export { ProductProvider as default , Consumer as ProductConsumer };
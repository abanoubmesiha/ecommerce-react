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
            detailProduct:{},
            cart:[],
            modalStatus:true 
        };
        this.addToCart=this.addToCart.bind(this);
        this.handleGetDetailProduct=this.handleGetDetailProduct.bind(this);
        this.closeModal=this.closeModal.bind(this);
        
    }
    closeModal(){
        this.setState({
            modalStatus:false
        })
    }
    
    addToCart(id){
        console.log(`addToCart is working and the id is ${id}`);
        function finder(x){
            return x.id === id;
         }
         const product = this.state.products.find(finder);
         const Cart = this.state.cart;
         const addingToCart = Cart.push(product);
         this.setState({
             cart:Cart,
             modalStatus:true
         })
        
    }
    handleGetDetailProduct(id){
        console.log(`handleGetDetailProduct is working and ${id} is working`);
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
            addToCart:this.addToCart,
            handleGetDetailProduct:this.handleGetDetailProduct,
            closeModal:this.closeModal,
            
            }}>
            {this.props.children}
        </Provider>
    );
}}

export { ProductProvider as default , Consumer as ProductConsumer };
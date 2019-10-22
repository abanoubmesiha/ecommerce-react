import React, { createContext, Component } from 'react';
import {storeProducts} from './data'; 

const TheContext = React.createContext();
const {Provider, Consumer} = TheContext;

class ProductProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: storeProducts,
            detailProduct:{},
            cart:[],
            modalStatus:false,

        };
        this.addToCart=this.addToCart.bind(this);
        this.handleGetDetailProduct=this.handleGetDetailProduct.bind(this);
        this.closeModal=this.closeModal.bind(this);
        this.handleIncart=this.handleIncart.bind(this);
        this.handleAddCount=this.handleAddCount.bind(this);
        this.handleDeleteCount=this.handleDeleteCount.bind(this);
        this.handleDeleteItem=this.handleDeleteItem.bind(this);
        
    }
    handleAddCount(id){
        function finder(x){
            return x.id === id;
        }
        let item = this.state.cart.find(finder);
        let itemIndex = this.state.cart.findIndex(finder);
        let cartCopy = this.state.cart.slice();
        cartCopy[itemIndex].count += 1;
         this.setState({
            cart:cartCopy
         })
           
    }
    handleDeleteCount(id){
        function finder(x){
            return x.id === id;
        }
        let item = this.state.cart.find(finder);
        let itemIndex = this.state.cart.findIndex(finder);
        let cartCopy = this.state.cart.slice();
        cartCopy[itemIndex].count -= 1;
         this.setState({
            cart:cartCopy
         })
           
    }
    handleDeleteItem(id){
        function findOthers(x){
            return x.id !== id;
        }
        let cartCopy = this.state.cart.filter(findOthers);
        this.setState({
            cart:cartCopy
         })
    }
    handleIncart(id){
         function finder(x){
            return x.id === id;
         }
         let product = this.state.cart.find(finder);
         if (product !== undefined) return true;
         else return false;
    }
    closeModal(){
        this.setState({
            modalStatus:false
        })
    }
    
    addToCart(id){
        function finder(x){
            return x.id === id;
         }
         let product = this.state.products.find(finder);
         let Cart = this.state.cart;
         let addingToCart = Cart.push(product);
         this.setState({
             cart:Cart,
             modalStatus:true
         })
         return product.count = 1;
        
    }
    handleGetDetailProduct(id){
        function finder(x){
           return x.id === id;
        }
        let product = this.state.products.find(finder);
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
            handleIncart:this.handleIncart,
            handleAddCount:this.handleAddCount,
            handleDeleteCount:this.handleDeleteCount,
            handleDeleteItem:this.handleDeleteItem
            
            }}>
            {this.props.children}
        </Provider>
    );
}}

export { ProductProvider as default , Consumer as ProductConsumer };
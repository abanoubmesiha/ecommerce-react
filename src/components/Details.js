import React, { Component } from 'react';
import {ProductConsumer} from '../Context';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,title,img,price,company,info,inCart,count,total} = value.detailProduct
                    return <h1>{title}</h1>
                    } }
            </ProductConsumer>
        )
    }
}

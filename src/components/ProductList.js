import React, { Component } from 'react';
import { TheConsumer } from '../TheContext';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
            <TheConsumer>
                <h1>state:</h1>
                {(value)=> {return <h1>{value}</h1>;}}
            </TheConsumer>
            </React.Fragment> 
        )
    }
}

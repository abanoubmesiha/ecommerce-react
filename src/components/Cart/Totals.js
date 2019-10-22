import React, {Component} from 'react'
import {ProductConsumer} from '../../Context';

export default class Totals extends Component {
    constructor(props) {
        super(props);
    
    }
    render() {
        const { cart } = this.props.props;
       // console.log(this.props.props);
        return (
        <ProductConsumer>
            {(value) =>{
                return (
                    <div className="text-right">
                        <h3>Totals</h3>
                        <h5>Items Total Price : ${value.totals.withoutTax}</h5>
                        <h5>Tax : ${value.totals.tax}</h5>
                        <h5>Total Price : ${value.totals.withTax}</h5>
                    </div>
                )
            }}
                
        </ProductConsumer>
    )
}
}
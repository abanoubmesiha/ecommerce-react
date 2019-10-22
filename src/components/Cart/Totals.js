import React, {Component} from 'react'

export default class Totals extends Component {
    constructor(props) {
        super(props);
    
    }
    render() {
        const { cart } = this.props.props;
       // console.log(this.props.props);
        return (
        <React.Fragment>
            
            <div className="text-right">
                 <h3>Totals</h3>
                 <h5>Items Total Price : $</h5>
                 <h5>Tax : $</h5>
                 <h5>Total Price : $</h5>
            </div>
                
        </React.Fragment>
    )
}
}
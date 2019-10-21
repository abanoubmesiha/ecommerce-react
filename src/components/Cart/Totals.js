import React from 'react'

export default function Totals({value}) {
        const { cart } = value;
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

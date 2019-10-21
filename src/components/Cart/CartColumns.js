import React from 'react'

export default function CartColumns() {
    return (
       <div className="row d-flex text-center justify-content-between">
           <div className="col-sm-10 col-md-2">
                <h3 className="d-none d-md-block border-bottom border-primary">Products</h3>
            </div>
           <div className="col-sm-10 col-md-2">
                <h3 className="d-none d-md-block">Price</h3>
            </div>
            <div className="col-sm-10 col-md-2">
                <h3 className="d-none d-md-block">Quantity</h3>
            </div>
            <div className="col-sm-10 col-md-2">
                <h3 className="d-none d-md-block">Remove</h3>
            </div>
            <div className="col-sm-10 col-md-2">
                <h3 className="d-none d-md-block">Total</h3>
            </div>
       </div>
    )
}

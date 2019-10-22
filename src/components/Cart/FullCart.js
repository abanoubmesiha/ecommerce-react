import React from 'react'
import {ProductConsumer} from '../../Context';
export default function FullCart() {
       
    return (
        <ProductConsumer>
            
        {(value)=>value.cart.map(item => { 
                const { title, img, price, count, total, id } = item ;
                return (
                <div className="row border-bottom border-primary d-flex text-center align-items-center justify-content-between my-1">
                    <div className=" col-sm-10 col-md-2">
                        <h6>{title}</h6>
                        <img src={img} alt="item" style={{width:"7rem"}}/>
                    </div>
                    <div className="col-sm-10 col-md-2">
                        ${price}
                    </div>
                    <div className="col-sm-10 col-md-2">
                        {count} Pcs
                    </div>
                    <div className="col-sm-10 col-md-2">
                        <span className="btn btn-primary"  onClick={value.handleDeleteCount.bind(this,id)}>-</span>
                        <span className="mx-1 my-1 btn btn-primary fa fa-trash" onClick={value.handleDeleteItem.bind(this,id)}/>
                        <span className="btn btn-primary"  onClick={value.handleAddCount.bind(this,id)}>+</span>
                    </div>
                    <div className="col-sm-10 col-md-2">
                        ${total}
                    </div>
                </div>
            )})}
        </ProductConsumer>
    )
}

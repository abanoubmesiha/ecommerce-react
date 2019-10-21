import React from 'react'

export default function FullCart({value}) {
       const {cart} = value;
        
    return (
        <React.Fragment>
            {cart.map(item => { 
                const { title, img, price, count, total } = item ;
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
                        {count}
                    </div>
                    <div className="col-sm-10 col-md-2">
                        <span className="btn btn-primary" >-</span>
                        <span className="mx-1 my-1 btn btn-primary fa fa-trash" />
                        <span className="btn btn-primary" >+</span>
                    </div>
                    <div className="col-sm-10 col-md-2">
                        {total}
                    </div>
                </div>
            )})}
        </React.Fragment>
    )
}

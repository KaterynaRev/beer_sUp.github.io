import React from "react";


export default function TotalPrice({totalPrice}){
    return (
        <div className="divTotal">
            <p id="pTotal">Total</p>
            <p id="pTotalPrice">{totalPrice}</p>
        </div>
    )
}
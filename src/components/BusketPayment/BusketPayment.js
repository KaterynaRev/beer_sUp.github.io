import "./busketPayment.css"
import React from "react";
import TipsForWaiters from "./TipsForWaiters/TipsForWaiters.js";
import TotalPrice from "./TotalPrice.js";


export default function BusketPayment({totalPrice}) {
    return (
        <>
            <div className="divPaymentBusket">
                <TipsForWaiters totalPrice={totalPrice}/>
                <TotalPrice totalPrice={totalPrice}/>
                <div className="divBtnConfirm">
                    <button id="btnConfirm">Confirm Payment</button>
                </div>
            </div>
        </>
    )
}

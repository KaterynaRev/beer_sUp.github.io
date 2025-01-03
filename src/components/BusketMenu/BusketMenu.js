import "./busketMenu.css";
import BusketPayment from "../BusketPayment/BusketPayment.js";
import UseBasketMenu from "./UseBasketMenu.js";
import InfoCartInBusket from "./InfoCartInBusket.js";
import ImgBusketUpper from "./ImgBusketUpper.js";
import React from "react";

export default function BusketMenu({
                                       cart,
                                       setCart,
                                       containerHeight,
                                       countBeer,
                                       handleOpenBusket,
                                       isOpenBusket,
                                       totalPrice,
                                       setCountBeer,
                                   }) {

    const {handleCountChange} = UseBasketMenu({cart, setCart, setCountBeer});

    return (
        <>
            <div className="busketContainer" onClick={handleOpenBusket}
                 style={{height: containerHeight, transition: "height 0.3s ease"}}>
                <ImgBusketUpper />
                <InfoCartInBusket cart={cart} countBeer={countBeer} handleCountChange={handleCountChange}/>
                {isOpenBusket && <BusketPayment totalPrice={totalPrice}/>}
            </div>
        </>
    )
}
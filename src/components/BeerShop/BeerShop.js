import IkonsMenu from "../IkonsMenu/IkonsMenu";
import BusketMenu from "../BusketMenu/BusketMenu";
import {useEffect} from "react";
import UseLocalStorage from "../BeersLocaleStorage/UseLocalStorage";
import UseBasketMenu from "../BusketMenu/UseBasketMenu";
import FetchBeers from "../FetchBeers/FetchBeers";
import React from "react";


export default function BeerShop() {
    // const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
    // const apiUrl = process.env.API_URL;

    const {fetchBeers, loading, beers} = FetchBeers();

    useEffect(() => {
        fetchBeers();
    }, []);

    const {
        cart,
        countBeer,
        setCart,
        setCountBeer,
        updateCartInLocalStorage,
        getCartFromLocalStorage,
        getCountBeerFromLocalStorage
    } = UseLocalStorage();

    useEffect(() => {
        const savedCart = getCartFromLocalStorage();
        const savedCountBeer = getCountBeerFromLocalStorage();
        if (savedCart.length > 0 || Object.keys(savedCountBeer).length > 0) {
            setCart(savedCart);
            setCountBeer(savedCountBeer);
        }
    }, []);

    useEffect(() => {
        updateCartInLocalStorage();
    }, [cart, countBeer])

    const getTotalPrice = () => {
        return cart.reduce((total, beer) => {
            const beerCount = countBeer[beer.id] || 0;
            return total + (beerCount * beer.price);
        }, 0);
    };

    const {
        addInCart,
        containerHeight,
        handleOpenBusket,
        isOpenBusket,
    } = UseBasketMenu({cart, setCart, setCountBeer});

    return (
        <>
            <IkonsMenu addCart={addInCart}
                       beers={beers}
                       loading={loading}
                       fetchBeers={fetchBeers}
                       cart={cart}/>
            <BusketMenu   cart={cart}
                          setCart={setCart}
                          containerHeight={containerHeight}
                          countBeer={countBeer}
                          setCountBeer={setCountBeer}
                          handleOpenBusket={handleOpenBusket}
                          isOpenBusket={isOpenBusket}
                          totalPrice={getTotalPrice()} />
        </>
    )
}
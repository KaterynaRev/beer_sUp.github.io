import "./seeInformation.css";
import SeeDescriptionContainer from "./Description/SeeDescriptionContainer.js";
import useDescription from "./Description/useDescription.js";
import FoodPairingContainer from "./Food_Pairing/FoodPairingContainer.js";
import useFood_PairingContainer from "./Food_Pairing/useFood_PairingContainer.js";
import React from "react";


export default function SeeInformation({
                                           loading,
                                           beers,
                                           selectedBeerId,
                                           handleCloseInform,
                                           addCart,
                                           cart
                                       }) {

    const currentBeer = beers.find(beer => beer.id === selectedBeerId);

    const handleAddInCart = () => {
        if (currentBeer) {
            addCart(currentBeer);
        }
    };

    const {toggleDescriptionCollapse, getWordsDescription, descriptionCollapse} = useDescription();
    const {foodPairingCollapse, togglefoodPairingCollapse, getWordsFoodPairings} = useFood_PairingContainer();

    const isBeerInCart = cart.some(item => item.id === selectedBeerId);

    return (
        <>
            <button id="btnClose" onClick={handleCloseInform}>CLOSE</button>
            <div className="beerSee">
                {loading ? (
                    <p id="pLoadingSee">Loading...</p>
                ) : currentBeer ? (
                    <div className="beerContainerSee">
                        <div className="beerListSee">
                            <div key={currentBeer.id} className="beerItemSee">
                                <div className="imgBeerSee">
                                    {currentBeer.image_url ? (
                                        <img src={currentBeer.image_url}
                                             alt={currentBeer.name}
                                             onError={(e) => e.target.style.display = 'none'}/>
                                    ) : (
                                        <span className="altTextImg">{currentBeer.name}</span>
                                    )}
                                </div>
                                <h3 className="nameBeerh3See">{currentBeer.name}</h3>
                                <p className="tagLineSee">Rating: {currentBeer.rating.average ? currentBeer.rating.average : "No tagline"}</p>
                                <p className="abvSee">{currentBeer.abv ? (currentBeer.abv + "%") : "No ABV" }</p>
                                <SeeDescriptionContainer toggleDescriptionCollapse={toggleDescriptionCollapse}
                                                         getWordsDescription={getWordsDescription}
                                                         descriptionCollapse={descriptionCollapse}
                                                         currentBeer={currentBeer}/>
                                <FoodPairingContainer currentBeer={currentBeer}
                                                      foodPairingCollapse={foodPairingCollapse}
                                                      togglefoodPairingCollapse={togglefoodPairingCollapse}
                                                      getWordsFoodPairings={getWordsFoodPairings}
                                />
                            </div>
                            <button onClick={handleAddInCart}
                                    id="btnAddCart">{isBeerInCart ? "IN CART" : "ADD TO CART"}</button>
                        </div>
                    </div>
                ) : (
                    <p>No beers found.</p>
                )}
            </div>
        </>
    );
}
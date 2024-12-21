import "./ikonsMenu.css";
import BeerListAll from "../BeerListAll/BeerListAll.js";
import SeeInformation from "../SeeInformation/SeeInformation.js";
import UseIconsMenu from "./UseIconsMenu.js";
import IconsUpper from "./IconsUpper.js";
import ActiveCategory from "./ActiveCategory.js";
import CategotyButton from "./CategotyButton.js";
import React from "react";


export default function IkonsMenu({addCart, loading, beers, fetchBeers, cart}) {

    const {
        activeCategory,
        activeDrinks,
        setActiveDrinks,
        selectedBeerId,
        isOpenInform,
        sortOption,
        isOpenSortMenu,
        sortBeers,
        handleSort,
        handleSortOpenToggle,
        handleButtonClick,
        handleFoodCategoryClick,
        handleSelectBeer,
        handleCloseInform
    } = UseIconsMenu({fetchBeers});

    return (
        <>
            <IconsUpper selectedBeerId={selectedBeerId} handleButtonClick={handleButtonClick}
                        activeCategory={activeCategory}/>
            <div className="content">
                <ActiveCategory activeCategory={activeCategory}
                                handleFoodCategoryClick={handleFoodCategoryClick}
                                activeDrinks={activeDrinks}
                                isOpenSortMenu={isOpenSortMenu}
                                handleSort={handleSort}
                                handleSortOpenToggle={handleSortOpenToggle}/>
                <CategotyButton activeCategory={activeCategory}/>
            </div>
            {activeCategory === "drinks" && beers.length > 0 && (
                <BeerListAll loading={loading}
                             beers={sortBeers(beers, sortOption)}
                             activeDrinks={activeDrinks}
                             setActiveDrinks={setActiveDrinks}
                             handleSelectBeer={handleSelectBeer}
                             fetchBeers={fetchBeers}
                             selectedBeerId={selectedBeerId}
                />)}
            {selectedBeerId && <SeeInformation loading={loading}
                                               beers={beers}
                                               selectedBeerId={selectedBeerId}
                                               handleCloseInform={handleCloseInform}
                                               addCart={addCart}
                                               cart={cart}
            />}
        </>
    );
}
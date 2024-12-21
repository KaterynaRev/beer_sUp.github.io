import {useState} from "react";

export default function FetchBeers() {
    const [loading, setLoading] = useState(false);
    const [beers, setBeers] = useState([]);

    const fetchBeers = (foodType = " ") => {
        setLoading(true);
        fetch('https://api.sampleapis.com/beers/ale')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (foodType && foodType.trim() !== "") {
                    const filteredBeers = data.filter(beer => {
                        if (beer.food_pairing && Array.isArray(beer.food_pairing)) {
                            return beer.food_pairing.some(food =>
                                food.toLowerCase().includes(foodType.toLowerCase())
                            );
                        }else if (typeof beer.food_pairing === "string") {
                            return beer.food_pairing.toLowerCase().includes(foodType.toLowerCase());
                        }
                        return false;
                    });
                    setBeers(filteredBeers);
                } else {
                    setBeers(data);
                }
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
    };

    return {
        fetchBeers,
        loading,
        beers,
        setBeers
    }
}


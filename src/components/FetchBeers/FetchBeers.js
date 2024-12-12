import {useState} from "react";


export default function FetchBeers(){
    const [loading, setLoading] = useState(false);
    const [beers, setBeers] = useState([]);

    // const fetchBeers = async (foodType = "") => {
    //     console.log("Fetching beers for:", foodType);
    //     setLoading(true);
    //     try {
    //         const response = await fetch('https://beer9.p.rapidapi.com/?brewery=BrewDog', {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': '0712eaab8fmsh4fc4390fb23cafbp1197f2jsne3ec848ca1fc',
    //                 'X-RapidAPI-Host': 'beer9.p.rapidapi.com',
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         const data = await response.json();
    //         const beers = data.data;
    //
    //         if (Array.isArray(beers)) {
    //             if (foodType) {
    //                 const filteredBeers = beers.filter(beer => beer.food_pairings && beer.food_pairings.includes(foodType));
    //                 setBeers(filteredBeers);
    //             } else {
    //                 setBeers(beers);
    //             }
    //         } else {
    //             console.error("Expected an array but got:", data);
    //             setBeers([]);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching beers:", error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    //
    // useEffect(() => {
    //     fetchBeers().then(() => {
    //     }).catch((error) => {
    //         console.error('Error during fetchBeers:', error);
    //     });
    // }, []);

    const fetchBeers = (foodType = "") => {
        setLoading(true);
        fetch(`${process.env.PUBLIC_URL}/mockBrewdog.json`)
            .then(response => response.json())
            .then(data => {
                if (foodType && foodType.trim() !== "") {
                    const filteredBeers = data.filter(beer => {
                        if (Array.isArray(beer.food_pairing)) {
                            return beer.food_pairing.some(food =>
                                food.toLowerCase().includes(foodType.toLowerCase())
                            );
                        } else if (typeof beer.food_pairing === "string") {
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
                console.error('Error fetching beers:', error);
            });
    };

    return {
        fetchBeers,
        loading,
        beers,
        setBeers
    }
}
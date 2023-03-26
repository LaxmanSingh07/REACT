import RestrauntCard from "./RestaurantCard";
import { useState, useEffect } from "react"
import Shimmer from "./shimmer";
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnlline";
const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchTxt, setSearchTxt] = useState([]); /// to create state variables 
    const [filteredRestaurants, setFilteredRestaurants] = useState("");


    useEffect(() => {
        getRestaurants();
    }, []);



    async function getRestaurants() {
        try {

            const data = await fetch(swiggy_api_URL);
            const json = await data.json();
            // console.log(json);
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        }
        catch (error) {
            console.log(error);
        }
    }

    const isOnline=useOnline();
    if(!isOnline)
    {
        return (<h1>🪸🪸🪸🪸Please check your internet connect</h1>)
    }

    if (!allRestaurants) {
        return (<h1>All the Restaurant in not there</h1>)
    }



    return (filteredRestaurants.length === 0) ? (
        <Shimmer />
    ) : (
        <>
            <div className="search-container">
                <input type="text" className="search-input"
                    placeholder="search" value={searchTxt}
                    onChange={(e) => setSearchTxt(e.target.value)}
                />
                <button className="search-btn" onClick={() => {
                    const data = filterData(searchTxt, allRestaurants)
                    setFilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.map((restaurant) => {
                        return <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>  <RestrauntCard {...restaurant.data} /></Link>
                    })
                }
            </div>
        </>
    )
}



export default Body;
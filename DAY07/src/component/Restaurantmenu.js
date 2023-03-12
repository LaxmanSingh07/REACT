import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./shimmer";
// params is hook
const RestaurantMenu = () => {
    //how to read a dynamic URL params 

    const { id } = useParams();
        const [restaurant,setRestaurant]=useState(null)
    useEffect(() => {
        getRestaurantInfo()

    }, [])

    async function getRestaurantInfo()
    {
        const data=await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/v4/full?lat=21.1702401&lng=72.83106070000001&menuId="+id
        );
        const json=await data.json()
        console.log(json)
        setRestaurant(json.data)

    }

    return !restaurant?<Shimmer/>:(
    <div className="specific">  
    <div>
            <h1>Restaurant id:{id}</h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} />
            <h3>{restaurant.area}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating}</h3>
        </div>
        <div>
        <h1>Menu</h1>
        <ul cal>
            {
                Object.values(restaurant?.menu?.items).map((item)=>(
                    <li key={item.id}>{item.name}</li>
                
                )    )
            }
        </ul>     
           </div>

        </div>
    )
}

export default RestaurantMenu;
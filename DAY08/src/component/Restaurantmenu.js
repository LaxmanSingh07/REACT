import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
// params is hook
const RestaurantMenu = () => {
    
    const { id } = useParams();
        // const [restaurant,setRestaurant]=useState(null)
    const restaurant=useRestaurant(id);
   

    return !restaurant?<Shimmer/>:(
    <div className="specific">  
    <div>
            <h1>Restaurant id:{id}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId} />
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating}</h3>
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
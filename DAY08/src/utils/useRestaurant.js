import { useState } from "react";
import { FETCH_NEW_URL } from "../constants";
const useRestaurant=(id)=>{
    const[restaurant,setRestaurant]=useState(null);

    //Get data from the api
    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo()
    {

        const data=await fetch (FETCH_NEW_URL+id);
        const json=await data.json()
        console.log(json)
        setRestaurant(json.data)

    }
    //return restaurant data
    return restaurant;
};

export default useRestaurant;
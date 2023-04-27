import { useState } from "react";
import { RestrauntList } from "../constants";
import RestrauntCard from "./RestaurantCard";
import { useState } from "react";


function filterData(searchTxt, restaurants) {
  //this is known the filter algorithm
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
  return filterData;
}

const Body = () => {
  // const searchTxt="KFC";
//normal variable won't work that is why we need something known as hook


  const [searchTxt, setSearchTxt] = useState(); /// to create state variables


// const searchClicked=false;
// const [searchClicked,setSearchClicked]=useState("false");

  const [restaurants, setRestaurants] = useState(RestrauntList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchTxt}
          //this function will automatically get the e property
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        {/* <h1>{searchTxt}</h1> */}
        {/* <h1>{searchClicked}</h1> */}
        <button
          className="search-btn"
          onClick={() => {
            // setSearchClicked (searchClicked==="true"?"false":"true");

            //need to filter data

            //update the state- restaurants
            const data = filterData(searchTxt, restaurants);
            // console.log(restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {
          //i can't change it directly that why i have to use the state
          restaurants.map((restaurant) => {
            return <RestrauntCard {...restaurant.data} />;
          })
        }
      </div>
    </>
  );
};

//why it was not working as soon as the state is changed

export default Body;

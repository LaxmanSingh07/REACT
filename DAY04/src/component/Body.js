import { useState } from "react";
import { RestrauntList } from "../constants";
import RestrauntCard from "./RestaurantCard";
import { useState } from "react"
//react uses one way data binding 


//what is state
//what is Hooks // hook is just a normal function 




function filterData(searchTxt, restaurants) {
    //this is known the filter algorithm
    const filterData = restaurants.filter((restaurant) => restaurant.data.name.includes(searchTxt));
    return filterData;

}

const Body = () => {

    // const searchTxt="KFC"; //normal variable won't work that is why we need something known as hook


    //searchTxt is a local state variable 

    //if you want to create a local variable create it using 


    // const stext="hello" ---> this is same as the next line 
    //but the difference is that first one in the js and second in the react 

    const [searchTxt, setSearchTxt] = useState(); /// to create state variables 
    //returns =[variable ame, function to update the variable]
    //this function return an array 
    //and the first variable of this array is name of variable 


    //useState ----> it returns an array 
    //you can write a default value "sefoijsr" inside the useState()


    //what is the need 

    // whenever a variable changes react will not know what is happping inside it
    //if a make any state variable then react will watch all the varaibe l

    //react has one way binding 




    // const searchClicked=false;

    // const [searchClicked,setSearchClicked]=useState("false");
    const [restaurants, setRestaurants] = useState(RestrauntList);
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input"
                    placeholder="search" value={searchTxt}
                    //this function will automatically get the e property  
                    onChange={(e) => setSearchTxt(e.target.value)}
                />
                {/* <h1>{searchTxt}</h1> */}
                {/* <h1>{searchClicked}</h1> */}
                <button className="search-btn" onClick={() => {
                    // setSearchClicked (searchClicked==="true"?"false":"true");       

                    //need to filter data

                    //update the state- restaurants 
                    const data = filterData(searchTxt, restaurants)
                    // console.log(restaurants);
                    setRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restaurant-list">

                {

                    //i can't change it directly that why i have to use the state 
                    restaurants.map(restaurant => {
                        return <RestrauntCard {...restaurant.data} />
                    })
                }
            </div>
        </>
    )
}

//why it was not working as soon as the state is changed


export default Body;
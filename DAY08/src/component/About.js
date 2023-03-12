// import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctional from "./Profile"
import React from "react";
import { Component } from "react";

class About extends Component
{
    constructor (props)
    {
        super(props);
        console.log("Parent - Constructor");
     
    }
    componentDidMount()
    {  
        console.log("Parent-componentDidMount");

        
    }
 render()
 {
    console.log("Parent - render ")
    return (
        <div>
         <h1>
             About Us page
         </h1>
         <p>
          Learning the react </p>
          {/* <ProfileFunctional name="Lucky" xyz="abc"/> */}
          <Profile name="Lucky" xyz="abc"/>
        </div> 
     )
 }
}

export default About;

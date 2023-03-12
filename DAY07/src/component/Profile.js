import { useEffect, useState } from "react";
import { render } from "react-dom";
const Profile=(props)=>{
    const [count,setCount]=useState(0);
    // const [count2,setCount2]=useState(0);
    // console.log("Render function");


    useEffect (()=>{
        //API CALL

        // console.log("UseEffect")
        
        const timer=setInterval(() => {
            console.log("Hello ji"); 
         }, 1000);
        console.log("useEffect")
        //  HOW TO CLEAR THE INTERVAL
        //  return ()=>{

        return ()=>{
            clearInterval(timer)
            console.log("useEffect return");
            // it will print after leaving the page 
        }
        
    },[]);
    console.log("render");
    // useEffect(()=>{
    //     // console.log("UseEffect2")

    // },[count2]);
    return(
        <div>
            <h2>Profile component</h2>
            <h3>Name: {props.name}</h3>
            <h3>Count: {count}</h3>
            <button onClick={()=>(
                setCount(1)
                // setCount2(2)
                )}>Count </button>
        </div>
    )
}

export default Profile;
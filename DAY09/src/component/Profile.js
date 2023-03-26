import { useEffect, useState } from "react";
import { render } from "react-dom";
const Profile=(props)=>{
    const [count,setCount]=useState(0);
    // const [count2,setCount2]=useState(0);
    // console.log("Render function");


    useEffect (()=>{
        
        // const timer=setInterval(() => {
        //     console.log("Hello ji"); 
        //  }, 1000);
        // console.log("useEffect")
      

        // return ()=>{
        //     clearInterval(timer)
        //     console.log("useEffect return");
        // }
        
    },[]);
    console.log("render");
  
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
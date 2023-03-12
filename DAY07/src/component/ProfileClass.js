//class base component 

//React.Component is come from 

import React from "react";
//Profile is inherting the property of the React .compoennet 
class Profile extends React.Component {
    constructor(props) {
        super(props);
        //Create State 
        // this.state={
        //     count:0,
        //     count2:0
        // }
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location"
            },
        };
        console.log("child-Constructor"+this.props.name);

    }
    // componentDidUpdate(preProps, preState)
    // {
    //     if(tihs.state.count!=preState.count){
    //         console.log(preProps,preState)
    //     }
    //     //it will call after every update
    //     console.log("Component did Update");
    // }

    //you have to clear the interval
    //int componentWIllUnmount
    async componentDidMount() {
        // setInterval(() => {
        //     console.log("Hello ji"); 
        //  }, 1000);
        //API COMPONENT 

        //it will render after first render 
        
        // const data=await fetch("https://api.github.com/users/akshaymarch7")
        // const json=await data.json();
        // console.log(json);
        // this.setState({
        //     //setState trigreed the nextRender 
        //     userInfo:json,
        // });
        
        console.log("child-ComponentDidMount"+this.props.name);
    }
    componentWillUnmount(){
        //it will call before the component is removed from the DOM
        // clearInterval(this.interval);
        console.log("componentWillUnmount");
    }
    render() {
        console.log("child-render");
        // const { count } = this.state;
        return (
            // return <h1>Profile Class Component</h1>
            <div>
                <h1>Profile Class Component</h1>
                {/* <h2>Name:{this.props.name}</h2> */}
                <h2>Name:{this?.state?.userInfo?.name}</h2>
                <img src={this?.state?.userInfo?.avatar_url}></img>
                <h2>Location:{this?.state?.userInfo?.location}</h2>
                {/* <h2>Count:{count}</h2> */}
                {/* <button onClick={() =>
                    this.setState({
                        // this.state.count =1 // it is not a good way to doing 
                        // we never mutate the state directly
                        count: 1,
                        count2: 2,
                    })
                }>SetCount</button> */}
            </div>
        )
    }
}

export default Profile;



/**
 * 
 * Parent Constructor
 * parent render
 * child constructor 
 * child render 
 * 
 * 
 * DOm is updated 
 * 
 * json is logged in console
 * child componentDid Mount 
 * 
 * 
 * Parent ComponentDid Mount
 * 
 * 
  */


/*
*
*child constructor
child render 
child componentDidMount
*
*
*API CALL
*SET STATE
*
*<UPDATE CYCLES>
*
* render component
*


*/




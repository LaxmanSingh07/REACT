

// making heading using the pure react 
// It take three argument 
// first tag
// object
// what would you need to put in this tag


// React Developer wants that we should write html and css in js it selft




const heading = React.createElement(
    "h1", {
    id: "title"
    //we can write anything in it this is known as the props
    //it is not like id or class anything allowed
}, "Heading 1");

const heading2 = React.createElement(
    "h2", {
    id: "title"
}, "Heading 2");


//when we have to pass the children the we pass as array 
const container=React.createElement("div",{
    id:"container"
},[heading,heading2])




// what is {} object --> i can give element different attribute like id

// in console props id : title 
// console.log(heading); // it will print the
//Now i want to put this into  root 

// this tells react that what is the root element inside my app 

//most react app have only have one root and render 
const root = ReactDOM.createRoot(document.getElementById("root"));

// now I want to put my heading inside the root 


//passing a react element inside the root

// if my root have different heading already then what will happen? 

//react will override everything 😳😳
// root.render(heading);

root.render(container);

//what React.createElement give to us ----> Object


//you can use the react inside the specific element 


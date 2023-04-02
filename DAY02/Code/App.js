import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { createElement as ce } from "react";
//key is always given 
//key is something which is unique identify 

//what is reason or why we need the key 

//React.createElement creat an object 


//React.createElement=>object =>HTML(DOM)


// console.log(heading2);


//     <div class="header">
//     <h1>Namste React</h1>
//     <ul>
//         <li>About me</li>
//         <li>Support</li>
//         <li>Home</li>
//     </ul>
// </div>





// this is a huge mesh isn't it😳😳😳😳?
//that'why we use something known as jsx

const container = ce(
    "div",
    {
        id: "container"
    }, [ce(
        "h1", {
        id: "title",
        key: "h1",
    }, "Heading 1"),

    React.createElement(
        "ul", {}, [ce(
            "li",
            {

            },
            "About us"
        )
    ]), ce(
        "ul", {}, [ce(
            "li",
            {

            },
            "About us"
        )
    ]), ce(
        "ul", {}, [ce(
            "li",
            {

            },
            "About us"
        )
    ]),
])

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);






//JSX IS DEVELOPED BY THE FACEBOOK

//can we do like this 
//yes yes it perfectly valid js code 
//and this h1 something is not string 
//this is knonwn as the jsx
//if i want to write in different lines then we have to use ()








// It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.



//if you but it on the direct on the console of your browser then it will give some error 

// then who understand this ----> Babel
//



//react element

// Component inside Component that is known as the Component composition
//composing component 

//different transfilers

const Heading = () => (
    <h1 id="title" key="h2">
        Namste React
    </h1>
);


const HeadComponent = () => {


    //we can put the element inside the component with the help of {}
    return (
        <div>

            {/* {heading}  */}
            {Heading()}
            {
                console.log("Hello guys")
            }
            <h1>Namste react function component</h1>
            <h2>This is h2 tag</h2></div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent />);

// never touch your node-module 
// never touch package.json
//module can import and export 




/**
 * PARCEL IS A BUNDLER 
 * 
 *
 * Creatd A Server
 * HMR ---> hot module Replacment
 * File watcher algorithm ----> written in C++
 * BUNDLing
 * MINIFY
 * CLEANING OUR CODE
 * Dev and production build
 * Super fast build algorithm
 * Image Optimization
 * Caching while devlopement
 * compression also
 * Comptable with older version of browser
 * it add polifill
 * Https on local dev 
 * port Number
 * Consistent Hashing Algorithm
 * Zero config 
 * transitive dependecies
 * Tree Shaking --> removing unwanted code
 * 
 * 
 * 
 */



import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { createElement as ce } from "react";
//key is always given 
//key is something which is unique identify 

//what is reason or why we need the key 

//React.createElement creat an object 


//React.createElement=>object =>HTML(DOM)


//     // console.log(heading2);


// //     <div class="header">
// //     <h1>Namste React</h1>
// //     <ul>
// //         <li>About me</li>
// //         <li>Support</li>
// //         <li>Home</li>
// //     </ul>
// // </div>


// //this is a huge mesh isn't it😳😳😳😳?

// //that'why we use something known as jsx

// //isntead of doing createElement from the react 

// const container = ce(
//     "div",
//     {
//         id: "container"
//     }, [ce(
//         "h1", {
//         id: "title",
//         key: "h1",
//     }, "Heading 1"),
//     React.createElement(
//         "ul", {}, [ce(
//             "li",
//             {

//             },
//             "About us"
//         )
//     ]),ce(
//         "ul", {}, [ce(
//             "li",
//             {

//             },
//             "About us"
//         )
//     ]),ce(
//         "ul", {}, [ce(
//             "li",
//             {

//             },
//             "About us"
//         )
//     ]),
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);




//JSX ?? 


//JSX IS DEVELOPED BY THE FACEBOOK

//can we do like this 
//yes yes it perfectly valid js code 
//and this h1 something is not string 
//this is knonwn as the jsx
//if i want to write in different lines then we have to use ()

//is jsx is html inside javascript ? 
// TRUE OR FALSE

//IT IS FALSE 
//THIS IS HTML LIKE SYNTAX 
//WHAT IS tabe-index ---> int html


// HW-------> WHAT IS THE DIFFERENCE BETWEEN THE HTML AND JSX

// This funny tag syntax is neither a string nor HTML.

// It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.



//if you but it on the direct on the console of your browser then it will give some error 

// then who understand this ----> Babel
//it AST's Abstract Syntx Tree -----> github of babel 




//react element

// Component inside Component that is known as the Component composition
//composing component 

//different transfilers

const Heading =()=> (
    <h1 id="title" key="h2">
        Namste React
    </h1>
);



//what is the different use of JSX?
//how do you making differnet tags in JSX 

// HOW THE JSX EXECUTES
//JSX => React.createElement=>Object =>HTML(DOM)

//JSX IS NOT A PACKAGE
// then who is converting Jsx to React.createElement --> it is babel 
//don't belive check in the web 

//babel come withe the parecel

//total pacage-lock.json ==2;

//everything is component in react 

//React Components ----> 

//there are two types of the component in the react 

//-Functional - NEW 
//-CLASS Based Component -OLD


// what is functional Component 

//functional Component is nothing but the function funny 🤣🤣🤣

//it is a javascript function 
// that return the compostion of the jsx

//name of component starts with capital letter
//it is a good practice to use like this 

//jsx does something like senitization before putting inside the function 

const HeadComponent = () => {
    //you can skip return 


    //we can put the element inside the component with the help of {}
    return( 
    <div>

        {/* you can write any valid javascript code inside these brackets */}
        {/* {heading}  */}
{/* if you would like to add functional component then we have to use it like this  */}
        {/* <Heading/>  ---> this is known as the function composition  */}


        {/* if you don't like to do it like this way then there is another way to do it because at last it is js function only then we can call the js function */}
        {Heading()}
        {
            console.log("Hello guys")
        }
        <h1>Namste react function component</h1>
        <h2>This is h2 tag</h2></div>
    )
}
// const HeadComponent2 = () => {
//     (<div><h1>Namstre react function component</h1>
//         <h2>This is h2 tag</h2></div>
//     )
// }



const root = ReactDOM.createRoot(document.getElementById("root"));


//when i have to render by reat element then we write like this 
// root.render(heading);


//when i have to render by functional component then i have to write something like this 

root.render(<HeadComponent/>);

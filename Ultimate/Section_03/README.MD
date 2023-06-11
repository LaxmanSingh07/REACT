## Why Do Front-End FrameWorks Exist?

`The Rise of Single-Page Applications`

`The old way of doing things`
Server-side rednering

`In Old way`, `the server will send the html`, `css, js to the client and the client will render the page.`

In old time JQUERY was used to manipulate the DOM

`The new way of doing things`
Client-side rendering

`In new way`, `the server will send the html`, `css, js to the client and the client will render the page.`


#### Q. Why we Don't want Single-page application with Vanilla JS?

Front-end web applicatonis are all about ...

- `Handling data + displaying data in User interface`
           
- User Interface needs to stay in sync with the data (DATA + UI)


- Very hard problem to solve with Vanilla JS


#### Problems with Vanilla JS and JQUERY

1. Requires a lot of DOM manipulation
"Spaghetti code" - code that is very hard to maintain

2. Data (state) is usually stored in the DOM, shared acrosss entire app 
3. Hard to reason + debug



## A FIRST LOOK AT REACT

### What is React?

`According to the official React documentation,`
 React is a JavaScript library for building user interfaces.


EXTREMELY POPULAR, DECLARATIVE,
COMPONENT-BASED, STATE-DRIVEN JAVASCRIPT
LIBRARY FOR BUILDING USER INTERFACES,
CREATED BY FACEBOOK 🤔 🤯 🤣

- Based on components: 
    - Components are the building blocks of user interfaces in React 
- Declarative: 
   - 👉 We describe how components
look like and how they work using
a declarative syntax called JSX
   - 👉 Declarative: telling React what a
component should look like,
based on current data/state
   - 👉 React is abstraction away from
DOM: we never touch the DOM
   - 👉 JSX: a syntax that combines
HTML, CSS, JavaScript, as well as
referencing other components


- State-driven: 
    - 👉 State: a representation of the data
    - 👉 Render
    - 👉 React will automatically update the re-rendering the UI

- JavaScript library:
    - Is React a library or a framework?
    - Because React is only the “view” layer. We
need to pick multiple external libraries to
build a complete application
    - Next.js and Remix are complete frameworks built on the top of React

- Extremely popular: 
    - 👉  React was created in 2011 by Jordan Walke, an
engineer working at Facebook at the time
    -👉 React was open-sourced in 2013, and has since
then completely transformed front-end web
development


- REACT IS EXTREMELY POPULAR
(Weekly downloads from NPM)
  - ✅ Many large companies have adopted React
  - ✅ Huge job market with high demand for React developers 🤑
  - ✅ Large and vibrant React developer community
  - ✅ Gigantic third-party library ecosystem
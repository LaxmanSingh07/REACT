Index.js is act as an entry point 


Try to use the eslint to check the code quality

React is all about the component 

Component As Building Block

- Components 

    -  👉 React applications are entirely made out of components
    -  👉 Building blocks of user interfaces in React 
    -  👉 Piece of Ui that has its own data,logic and apprearance (how it works and looks)
    -  👉 We build complex Uis by building mulitple components and nesting them inside each other
    -  👉 Components can be reused,nested inside each other, and pass data between them 


Component 

 - Data
 - Logic
 - Apprearance
## What is JSX

-  👉 JSX is a syntax to describe what components should look like and how it work
-  👉 Component must return a block of JSX
-  👉 Extension of js that allows us to embed JavaScript, Css and React Component into Html
-  👉 JSX is there but we could usee React without JSX
### What is Babel 

- Babel is a `transpiler` that converts `JSX into browser readable` JavaScript

Babel is automatically installed when we install react




### JSX IS DECLARATIVE

Imperative (How to do things )

- Manual DOM element selections and DOM traversing
-  Step by Step Dom manipulation until we reach the desired UI


### Declarative (What to do)

- Describe what Ui should look like using JSX, based on current data 



In Strict mode our component will be rendered twice


## Sepration of Concerns 

  -  👉 `Sepration of concerns` is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern
  
previously i was using one technology in one file 

But at current I am using One Component in one file


```
                 SEPARATION OF CONCERNS?
                 ONE COMPONENT PER FILE

                 Rise of
                 interactive
                 SPAs

                 JavaScript is in
                 charge of HTML

                 Logic and UI are
                 tightly coupled

                 Why keep them
                 separated?

                 React
                 Components + JSX

```

## What is props 

-  👉 Props are a way of passing data from parent component to child component
-  
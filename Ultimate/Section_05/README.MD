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

## Reviewing Props

- 👉 Props are used to pass data from parent components to child components (down the component tree)
- 👉 Essential too to config and customize components components (like function parameters)
- 👉 with props, parent components `control` how child components look and work 
- 👉Anything can `pass` to props (functions,arrays,objects,JSX,etc)


## `Props are Read only`


Props are `read-only`, they are immutable! This is one of React's strict rules.

If you need to mutate props, you actually need state 

## Why props are immutable

Mutating props would affect parent, creating `side effect` (not pure)
Components have to be `pure` and `predictable`

## What is One Way Data Flow

- 👉 Data flows in one direction (from parent to child)

`But other frameworks like Angular and Vue have two way data binding`

##### Why one way data flow

- 👉 One way data flow makes it easier to track changes
- 👉 is more performant

###### But what if I want to pass data from child to parent

(clever solution) Check next section 

## Rules of JSX 

General Rules

1. jsx works essentially like html, with some differences like `we can enter` `JavaScript mode` by using {} (for text or attributes)

2. We can place JavaScript expressions inside JSX by using {}

3. Statement are not allowed (if,else,for,while,switch etc)

4. Jsx produces a JavaScript expression

5. A piece of JSX can only have `one root element`. If you need more ,use <React.Fragment> (or the short <>)



## Differnce between jsx and html








`Each items in a React Key should be unique`




## Conditional Rendering 

- 👉 Conditional rendering is the process of conditionally rendering a part of the page instead of always showing the same thing
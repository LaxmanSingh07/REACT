
## What is State in React 

`State` is a bascically a data that a component `can hold over time` necessary for information that it needs to remember throughout the app's lifecycle.

`Component's memory` is the `State` of the component.

`State Variables` / `piece of state` : A single varible in a component (component state )  (we use the term interchagebly)

`Updating component` state triggers React to `re-render the component `



### State Allows Devlopers to: 

`Update the component's view` (by re-rendering it )
Persist local variables between renders 

`State is a tool.` Mastering state will unlock the power of React Development. 



## useState :

It returns an array 

It is a hook 

`All the function which starts with use` is Hook of the react 

## The mecchanics of State in React


- We  `don't` do direct DOM manipulation in React.
  ( because React is a declarative library )


- ? How is a component view updated then? 

- In React, a view is updated by re-rendering the component. (`Important React Concept`)


REACT CALLS THE COMPONENT FUNCTION AGAIN AND RE-RENDERS THE COMPONENT. (updated view)


React is called `React` because it `reacts` to state changes.

`React Developer Tools` : A browser extension that allows us to inspect the React component hierarchy in the `Virtual DOM` as well as the `Real DOM`.


## Thoughts on State

- One Component, One State 

Each component has and manages its own state, no matter how many instances of that component exist.

- UI AS A FUNCTION OF STATE

`UI= f(state)`


## IN PRACITCE terms

### Practice Guidelines about state 

- Use a State variable for any data that the component should keep track of ("remember") over time. `This is data that will change at some point `. In Vanilla JS, that's a let variable or and [] or {}

- Whereever you want something in the component to be  `dynamic` create a piece of  state related to the "thing", and update the state when the "thing" changes. (aka "be dynamic")

- If you want to change the way a component looks , or dat is displays, `update its state`. This usually happens in an `event handler` function.

- When building a component, imagine its view as a `reflection of state changing over time`

- For data that should not trigger component re-renders, `don't use state`. (use a variable instead) `Comman Beginner Mistake`
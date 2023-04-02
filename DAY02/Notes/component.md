## EVERYTHING IS A COMPONENT IN REACT 

### WHAT IS COMPONENT? 

A component is a function or a class that returns a React element.



There are two types of components:

1. ClassBase Component (OLD WAY)
2. Functional Component (NEW WAY)

#### BOTH ARE VERY IMPORTANT 

### CLASS BASED COMPONENT

It is a class that extends React.Component. It has a render method that returns a React element.

```link

(https://reactjs.org/docs/react-component.html)

```


### FUNCTIONAL COMPONENT 

It is a new way to write a component that is introduced in React 16.8. It is a function that returns a React element.


`functional Component is nothing but the function `
funny 🤣🤣🤣
Example:


```js
const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

// if you wan to skip the return keyword you can use the arrow function like this

const App = () => (
    <div>
        <h1>Hello World</h1>
    </div>
)

// It will also work without any problem

{/* you can write any valid javascript code inside these brackets */}

```


Naming convention for functional component is to start with a `capital letter`.

when i have to react element then for rendering the react element we have to use the `ReactDOM.render()` method.


```js
const heading = <h1>Hello World</h1>

ReactDOM.render(heading, document.getElementById('root'))
```

for the functional component we have to use the `ReactDOM.render()` method like this

```js 
const App = () => (
    <div>
        <h1>Hello World</h1>
    </div>
)  

ReactDOM.render(<App />, document.getElementById('root'))
```


### WHAT IS SANITIZATION DONE BY JSX?

LINK : 
```s
https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks
```


### ONE JARGON COMPONENT COMPOISITON 

Nothing but the process of combining multiple components to make a complex component.

```s
https://reactjs.org/docs/composition-vs-inheritance.html
```
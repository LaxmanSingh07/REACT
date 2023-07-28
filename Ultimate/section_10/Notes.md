## How to split a UI into Components 

- Components Size Matters 

|Small|Huge|
|:-:|:-:|
|We




## Component Categories

`Most of you components will naturally fall into one of three categories`

1. Stateless/ presentational components
2. Stateful/ container components
3. Structural components

### Stateless/ presentational components

     - No State
     - Can receive props and simply present received data or other content 
     - Usually small and reusable


### Stateful/ container components

     - State
     - Can receive props and manage state
    
### Structural components

    👉 “Pages”, “layouts”, or “screens” of the app
    👉 Result of composition
    👉 Can be huge and non-reusable (but don't have to)

## Prop Drilling

- 👉 Prop drilling is the process of passing props from one component to another component, and to another component, and so on, until it reaches its final destination component.


## Component Composition

### `Using` A Component 

```jsx

function Modal()
{
    return (
        <div className="modal">
            <Sucess/>
        </div>
    )
}


function Sucess()
{
    return (
        <div className="sucess">
            <h1>Success</h1>
        </div>
    )
}

```

- Sucess is inside Modal:   We can't reuse Modal without Sucess
- Want to Reuse ❌

### Composition 

```jsx

function Modal({children})
{
    return (
        <div className="modal">
            {children}
        </div>
    )
}

function Sucess()
{
    return (
        <div className="sucess">
            <h1>Success</h1>
        </div>
    )
}



```
👉 We can REUSE Modal ✅


### Formal Definition 

- 🤙 Component composition `Combining different components using the children props (or explicitly defined props)`

### We component Composition , we Can: 

- 👉 create highly reusable  and composition components
- 👉 Fix prop drilling ( great for layouts )



### Props As AN API


#### Component Consumer 
#### Computer Creator



|Too Little Props | Too Many Props|
|:-:|:-:|
|👉 Not flexible enough | 👉 Too Hard to use |
|might not be useful| 👉 Exposing too much compexity Hard-to-write code|




`We need to find the right balance between too little and too many props, that works for both the consumer and the creator`


## Prop Types 

- 👉 Prop types are a way to document the intended types of properties passed to components

- 👉 Prop types are not enforced, but they are useful for documentation and debugging

- 👉 Prop types are defined as static properties of the component function

- 👉 Prop types are defined using the prop-types package

- 👉 Prop types are only available in development mode

- 👉 Prop types are not available in production mode

# New Section

## Life cycle of the Component

1. Mounting / Intial Render

👉 Component instance is rendered for the first time

👉 Fresh state and props are **created**

2. Re-render 

         Happens when: 
           👉 State changes 
           👉 Props change
           👉 Parent component re-renders
           👉 context changes


3. Unmounting 💀

        👉 Component instance is removed from the DOM
        👉 State and props are destroyed


## How to fetch the Data from in React 



## UseEffect hook  ( React Hooks )

- 👉 useEffect is a hook that allows you to perform side effects in function components

- 👉 useEffect is a replacement for the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods

```jsx
useEffect(() => {
    // code to run on component mount
    // code to run on component update
    return () => {
        // code to run on component unmount
    }
}, [dependencies])


```


## Where to Create SIDE EFFECTS 

👉 REVIEW: A side effect is basically any “interaction between a React component and the world outside the component”. 
We can also think of a side as “code that actually does something”. Examples: Data fetching, setting up subscriptions, 
setting up timers, manually accessing the DOM, etc

### Side Effects are of two types 

1. Event Handlers (Triggred by Event)
2. Effects (useEffect) (Triggred by render)

👉 Effects allow us to write code that will run a **different moments:** mount ,re-render , or unmount 


## EVENT HANDLERS VS EFFECTS


|Event Handlers| Effects|
|:-:|:-:|
|👉 Triggred by Event| 👉 Triggred by render|
|👉 Executed when the coressponding event happens| 👉 Exectued after the component mounts (intial render) ,and after susequent re-renders (according to the dependency array)|

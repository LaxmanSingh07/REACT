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



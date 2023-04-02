## How to write the react component inside the functional Component 

```js
const heading = (<h1>Hello World</h1>);


const App = () => {
    return (
        <div>
            {heading}
            <h1>Hello World</h1>
        </div>
    )
}
```

## what if I put functional component inside the functional component

it will not work if we do the same way as we did for the `heading` variable

We will use the Angular brackets to write the functional component inside the functional component

```js
const heading =()=> (<h1>Hello World</h1>);
const App = () => {
    return (
        <div>
            <heading/>
            {/*You can use {heading()} because it is just a js funcion*/}
            <h1>Hello World</h1>
            <Heading />
        </div>
    )
}
```


#### What is the need of the functional component ? 

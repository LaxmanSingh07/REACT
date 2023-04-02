## What is props in React?

Props is short for properties. Props are used to pass data from one component to another. Props are passed to components via HTML attributes.

props are similar to function arguments in JavaScript and attributes in HTML.

props are immutable. Once they are passed to a component, they cannot be changed by that component.

example:

```js

const App = () => {
    return (
        <div className="restaurant-list">
        <RestrauntCard restaurant={restrutList[0]}/>
        <RestrauntCard restaurant={restrutList[1]}/>
    )
}

Here App is a parent component and RestrauntCard is a child component.
restaurant is a prop which is passed to RestrauntCard component from App component.

```

## Object Destructuring

Object destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
const person = {
  name: "John",
  age: 36,
  address: {
    city: "New York",
    state: "NY",
  },
};

const { name, age, address } = person;

console.log(name, age, address);
```


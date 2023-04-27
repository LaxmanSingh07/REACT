### jsx expressions must have one parent element

Example:

```jsx
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

## React Fragments

React.Fragment is an component that
is coming from react library
is a component which is exported by this react

React.Fragment is like a empty tag
we can use React.Fragment , <> and </> to wrap the elements
this is kinda shorthand  <></>
    

`React` `Fragments` let you group a list of children without adding extra nodes to the DOM.

<React.Fragment> the same as `<>` and `</>`.


## CSS in React

### Inline CSS

```jsx

const element = (
  <div style={{ color: "red", fontSize: "20px" }}>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

```


It is a component that can be used to wrap other components.


```jsx
const element = (
  <>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </>
);
```

.join is a method that is used to join the elements of an array into a string



### WHAT IS CONFIG DRIVEN UI?

Config Driven UI is a way to create UI components that are configurable by a JSON file. This allows you to create a UI that can be customized by a non-technical user.

-Config Driven UI ---> it is a good pratice we follow

Example:

```jsx
const config = [
    {
        type: "carousel",
        card: [
            {
                offerName: "50% off"
            },
            {
                offerName: "No Delivery Charge"
            }
        ]
    },
    {
        type: "resutaurants",
        card: [
            {
                name: "Burger King",
                Image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0bf19a82b109b40c2f5c56d00f071a33",
                cusines: ["Burger", "American"],
                rating: "4.2"
            },
            {
                name: "KFC",
                Image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0bf19a82b109b40c2f5c56d00f071a33",
                cusines: ["Burger", "American"],
                rating: "4.2"
            }
        ]
    }

]

```


## WHAT IS OPTIONAL CHAINING?

Optional chaining is a new feature in JavaScript that allows you to access nested objects without having to check if the parent object exists. This is useful when you are working with data that may not be available.

Example: 

```jsx

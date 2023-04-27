## What if you want to change the state of a component 

- every component in react maintains a state object.

What is state in React?

- State is an object that represents the parts of the app that can change.



- In React you can't change the state of a component directly.


How to change the state of a component?

- You can change the state with the help of `useState` hook.


What is a Hook?

(you can think of a hook as a normal function)

- Hooks are functions that let you `hook into` React state and lifecycle features from function components.


```jsx

const [state, setState] = useState(initialState);

```

- `useState` is a hook that lets you add React state to function components.
- `useState` returns a pair of values: the current state and a function that updates it.
- you can pass the intial value to the `useState` hook.

```jsx

const [count, setCount] = useState(0);

```

## Need for setState

- React has doesn't have any idea what is happening in the component.
  
- `setState` is a function that is used to update the state of a component.

- if you want to sync the state of a component with the UI then you have to use `setState` function.






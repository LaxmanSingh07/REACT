## File Structure


Is there a recommanded way to structure a React project?

React doesn't have opinions on how you put files into folders. That said, we recommend that you locate your components in a consistent place in your source tree. This will make it easier to refer to them in your own tests and documentation. It will also make it easier to refactor your code later on if your app grows. 

Link: 

[file-structure](https://reactjs.org/docs/faq-structure.html)


## Ways to export a component

```jsx


// 1. export by default
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

//default export is used when you want to export only a single object, function, variable.

//2. export by name

//Named import
export function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

// Import *  it will import all the named exports





```


Note: 

`some people use the .jsx extension for React components.`

`config` file is used to configure the project.




`React Uses one way data binding.`

##### Why one way data binding is good?

- It is easy to debug.
- It is easy to understand.


## EventHandlers in React

In React, event handlers are the functions that handle the events triggered by the user. These events can be the browser events or the events generated by the user actions like click, pressing a key, etc. The event handlers are used to perform some specific tasks. For example, if the user clicks on a button, then the event handler associated with the button will be executed.


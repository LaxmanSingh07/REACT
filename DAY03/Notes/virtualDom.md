## Virtual DOM

Virtual DOM is a concept where a virtual representation of the DOM is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called reconciliation.


## What is reconciliation?

(https://reactjs.org/docs/reconciliation.html)

It is an algorithm that takes two trees of React elements and generates the minimal set of operations to transform one tree into the other.


### Diff Algorithm

(https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm)


Reconciliation is the process of updating the DOM to match the desired output. When the virtual DOM is updated, React needs to compare the previous version of the DOM with the new version. This is called reconciliation.

React provides a declarative API so that you don't have to worry about exactly what changes on every update. This makes writing applications a lot easier, but it might not be obvious how this is implemented within React.

When you call ReactDOM.render() in a React app, the rendered element is kept in memory. Then, the React internals compare the element with the previous one, and only apply the DOM updates necessary to bring the DOM to the desired state.

**NOTE** : if there are 4 divs in the in a component but there is no keys assigned to them ... if you insert or change in some div then react will re-render all the 4 divs

### why we don't use index as a key?
Negative impact of using index as a key is that if the order of items in the list changes, the key will also change. This will cause React to re-render all the items in the list, which is inefficient.

//no key << index key ()<< unique key  (Best Practice)

```js

<head>
<body>
    <Rest1>
    <Rest2> <Img>
    <Rest3>

```



## What is React Fiber?

came in React 16

React Fiber is the new core algorithm of React. It is a reimplementation of React's core algorithm, which has been rewritten from scratch in JavaScript. It is a new core algorithm that is designed to solve the problems inherent in the old core algorithm.

Reconciliation Engine. 

## React Fiber Architecture

(https://reactjs.org/docs/codebase-overview.html#react-fiber-architecture)


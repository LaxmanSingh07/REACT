## How React Works `Behind the Scenes`

### `Component vs Instance vs Element`


 **Components** 

        👉 Description of a piece of UI
        👉 A component is a function that returns React elements (element tree), usually written as JSX
        👉 “Blueprint” or “Template”

**Instances**

        👉 Instances are created when we “use” components
        👉 React internally calls Tab()
        👉 Actual “physical” manifestation of a component
        👉 Has its own state and props
        👉 Has a lifecycle (can “be born”, “live”, and “die”


**Elements**

    👉 JSX is converted to React.createElement() function calls
    👉 A React element is the result of these function calls
    👉 Information necessary to create DOM element


```   
     Component
Component Instance
React Element
RETURNS
DOM Element (HTML)
INSERTED TO DOM

```


## HOW RENDERING WORKS: OVERVIEW 

### How Components Are Displayed ON THE SCREEN



- RENDER IS TRIGGERED (by updating state somewhere)


- RENDER PHASE (React calls component functions and figures out how DOM should be updated)


- Commit Phase (React actually writes to the DOM, updating, inserting and deleting elements)

- Browser paints DOM changes to the screen (It is not related to React, it is a browser thing)


☝ In React, rendering is NOT updating the DOM or displaying elements on the screen. 
Rendering only happens internally inside React, it does not produce visual changes.


###  How Renders are Triggered

`Render is Triggered`


**THE TWO SITUATIONS THAT TRIGGER RENDERS:**

1. `Initial render` of the application.
2. `State is updated` in one or more component instances (re-render)


```text 

     👉 The render process is triggered for the entire application
     👉 In practice, it looks like React only re-renders the component where the state update happens, but that’s not how it works behind the scenes
     👉 Renders are not triggered immediately, but scheduled for when the JS engine has 
     some “free time”. There is also batching of multiple setState calls in event handlers

```



The MECHANICS OF STATE IN REACT 

```

UPDATED STATE <--------------
     |                      |            
     |                      |            
     |                      |            
     |                      | (update state)           
RENDER/RE-RENDER            |
     |                      |
     |                      |
     |                      |
   VIEW (event Handler) ----|


```

NOT TRUE #1 ❌: RENDERING IS UPDATING THE SCREEN / DOM
NOT TRUE #2 ❌: REACT COMPLETELY DISCARDS OLD VIEW (DOM) ON RE-RENDER


### The Render Phase


`RENDER PHASE`


```
     Component instances 
     that triggred re-render
               |
               |
         React Elements
               |
               |
        New Virtual DOM


```


## The virtual DOM (REACT ELEMENT TREE)

1️⃣ Initial Render 


     Component Tree
          |
     React Element Tree (Virtual DOM)


👉 Virtual DOM: Tree of all React 
elements created from all 
instances in the component tree
👉 Cheap and fast to create multiple 
trees
👉 Nothing to do with “shadow DOM”

`Shadow Dom` it is related to web components


🚨 Rendering a component will 
cause all of its child components 
to be rendered as well (no matter 
if props changed or not)

`It is necessary because React does not know wheather children will be affected`


```
                Component instances 
                that triggred re-render
                          |
                          |
                    React Elements
                          |
                          |
                   New Virtual DOM
                          |
Current                   |
Fiber tree                |
(before state -----> Reconciliation
update)                + Diffing
                         |
                         |
                         |
                      Updated Fiber tree   


```


## What is Reconciliation and why do we need it ? 

🤔 Why not update the entire DOM whenever state changes somewhere in the app?
          |
          |  (because)

👉 That would be inefficient and wasteful:

1. Writing to the DOM is(relatively) slow
2. Usually nly a small part of the DOM needs to be updated 

👉 **React reuses** as much of the existing DOM as possible 
          |
          | (How?)

💖 **Reconciliation** : Deciding which DOM elements actually need to be inserted, deleted, or updated, in order to reflect the latest state change


### The Reconclier : FIBER

React ELEMENT TREEE (VIRTUAL DOM)
     |
     | (for initial Render)
     | 
Fiber Tree 

👉 Fiber Tree: internal tree that has a "fiber" for each component instance and DOM element 
👉 Fibers are NOT re-created on every render 
👉 Work can be done **Asynchoronously** (in chunks)
👉 Rendering process can be split into 
chunks, tasks can be prioritized, and work 
can be paused, reused, or thrown away
👉 Enables concurrent features like 
Suspense or transitions
👉 Long renders won’t block JS engine



```
     Fiber ("Unit of Work")

     Current State 
     props
     side effects 
     Used hooks 
     Queue in Work
```


## Reconcliation in Action



## The Commit Phase and Browser Paint 




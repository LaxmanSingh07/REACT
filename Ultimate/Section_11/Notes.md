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



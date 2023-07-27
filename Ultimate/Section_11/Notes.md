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
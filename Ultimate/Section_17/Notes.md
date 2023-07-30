## What is ROUTING? 


### Routing (Client-Side Routing)

👉 With routing, we match **different URLs to different UI views** (React components): **routes**
👉 This enables users to **navigate between different applications screens**, using the browser URL
👉 Keeps the UI in **sync** with the current browser URL
👉 Allows us to build Single-Page Applications

`REACT THIRD PARTY LIBRARIES` : **ReactRouter**


## **SINGLE-PAGE** APPLICATIONS (SPAs)


👉 Application that is **executed entirely on the client** browsers

👉 **Routes:** diffent URLs correspond to different views (Components)

👉 **JavaScript** (React) is used to update the page (DOM)

👉 **The page is never reloaded**

👉 Feels like a **native app**

### SPA RUNNING ON CLIENT 💻

```
|--------->User clicks router link 
|                |
|                |
|            Url is changed  (In React,
|  react-router package does this)
|                |
|                |
|            DOM is updated
|        React component corresponding 
|-----to the new URL is rendered



```


## Link and NavLink

`<Link>` is used to navigate between different routes. It works like the anchor tag in HTML. It prevents the default action of reloading the page when clicked on the link.

`<NavLink>` is similar to `<Link>`, but it has the ability to add styling attributes to the rendered element when it matches the current URL.

## STYLING OPTIONS FOR REACT APPLICATIONS 

|Styling Option|Where?|How?|SCOPE|BASED ON|problems|
|--------------|------|----|-----|--------|----|
|Inline Styling|JSX|style={{color: 'white'}}|<span style="color: green;">JSX element</span>|CSS|Local|
|CSS or SASS file|External file|className prop|<span style="color: red;">Entire app</span>|CSS|Global,cause conflicts|
|Css Modules|One external file per component|className prop|<span style="color: green;">Component</span>|JavaScript|No|
|Cass-in-JS|External file or component file|create New Component|<span style="color: green;">Component</span>|JavaScript|No|
|Utility-first CSS|JSX|className prop|<span style="color: green;">ClassName Group</span>|Jsx element|Css|

`Alternative to styling with CSS: UI libraries like MUI,Chakra UI,Mantine,etc.`

## Nested Routes 

### What is Outlet?


## What is Index Route?
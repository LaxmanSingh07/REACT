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

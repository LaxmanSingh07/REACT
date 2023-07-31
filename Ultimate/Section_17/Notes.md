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

## Storing State in the URL 

## THE URL OF **STATE MANAGEMENT** 

👉 The URL is an excellent place to store UI state and an alternative to useState in some situations! 

**Examples**: open/closed panels, currently selected list item, list sorting order, applied list filters


1. Easy way to store state in a **global place**, accessible to **all components** in the app.

2 Good way to **“pass” data** from one page into the next page.

3 Makes it possible to **bookmark and share**
the page with the exact UI state it had at the time

## PARAM AND QUERY STRING

```http

www.example.com/app/cities/lisbon?lat=38.7222524&lng=-9.1393366&zoom=10

app/cities : path
lisbon : param
lat,lng,zoom : query string

```

## Params with React Router 
 
There are three steps to Use params in React Route 

1. create a new route 
2. link the route 
3. Read the state from the URL

### useParams() hook 
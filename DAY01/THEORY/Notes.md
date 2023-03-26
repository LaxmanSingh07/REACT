## Q1 : What is `Emmet`?

`Emmet` is a plugin for text editors that allows for faster and more efficient `HTML and CSS` coding. It uses a shorthand syntax to generate HTML and CSS code quickly and easily. For example, typing `div.container>ul.list>li.item*5>a` and then expanding it with the Emmet plugin would generate the following code:

### HTML

```
<div class="container">
  <ul class="list">
    <li class="item"><a href=""></a></li>
    <li class="item"><a href=""></a></li>
    <li class="item"><a href=""></a></li>
    <li class="item"><a href=""></a></li>
    <li class="item"><a href=""></a></li>
  </ul>
</div>
```

Emmet is a very useful tool for web developers who want to speed up their coding workflow and be more productive.

---

## Q2: what is `CDN` and why we use them?

CDN stands for Content Delivery Network. It is a distributed network of servers that delivers content, such as images, videos, JavaScript files, and other web assets, to users based on their geographic location.
CDNs work by caching content on servers that are located closer to the user, which reduces the time it takes for the content to be delivered. This can improve website performance, reduce server load, and increase availability.

There are several reasons why we use CDNs:

- **`Faster content delivery`**: By using a CDN, content is delivered from a server that is closest to the user, which reduces the time it takes for the content to load.
  Improved website performance: Since content is delivered from a nearby server, the website can load faster, which can improve the user experience.

- **`Increased availability`** : CDNs can help to distribute website traffic across multiple servers, which can help to prevent server overload and improve website availability.

- **`Reduced server load`**: By using a CDN to deliver content, the server load is reduced, which can help to improve website performance and reduce the risk of server crashes.

- **`cost-effective`**: Using a CDN can be cost-effective, as it can help to reduce the amount of bandwidth that is used by the server, which can help to reduce hosting costs.

Overall, CDNs are a powerful tool for improving website performance, reducing server load, and improving the user experience.

## Q3: Difference between a `Library and Framework`?

A: A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the library.

## Q4: Why is `React known as React`?

A: `React` is named React because of its ability to `react to changes in data`.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name `React` was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
`React` is a `JavaScript-based UI development library`. `Facebook` and an `open-source developer community` run it.

## Q5: What is `crossorigin in script tag`?

A: The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

### _Syntax_

```sh
<script crossorigin="anonymous|use-credentials">
```

## Q6: What is difference between `React and ReactDOM`?

A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.
The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

## Q7: What is the `react element`

It is an object

### Q8: what is `{}` inside `React.createElement("h1",{},"Hello)`?

In `React.createElement("h1",{}, "Hello")`, the empty object `{}` is an optional parameter called `props` or **"`properties`"**, which can be used to pass additional data to the component.


## Q9: What is `async and defer`?
A: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.
### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```
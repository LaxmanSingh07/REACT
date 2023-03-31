## Build `our own` create react App

__syntax__:

```s
React.createElement(type, [props], [...children])
```
Note: `type` can be a string (e.g. 'div' or 'span') or a React component class or a function.

__example__:

```s    
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

Note: `props` is an object that contains all the attributes of the element. `children` is an array of all the children of the element.

__example__:

```s
const element = React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Hello, world!'),
  React.createElement('h2', null, 'Good to see you here.')
);
```

## What is Bundlers?

`Bundlers` are `tools` that take your `code and all` of its `dependencies` and generate a `single file` that can be run in the browser. This is called a bundle.


__Note__: `Bundlers` are `not` `required` to use `React`. They are `only` `used` in a `large` `application` to `speed up` the `development` `process`.


Eg: `Webpack` and `Browserify` are `bundlers`.

__Syntax__:

```s
npx create-react-app my-app

```




__Note__ : I am using `Percel` in this project.


## NPM AND YARN

`npm` is a `package manager` for the `JavaScript` programming language. It is the default `package manager` for the `JavaScript runtime environment Node.js`.


`yarn` is a `package manager` that doubles down as project manager. `Yarn` is a `new` `package` `manager` for `JavaScript` and `replacement` for the `existing` `workflow` for the `npm` `client` or `client-side` `package` `manager`.


__Note__: `Yarn` is `faster` than `npm`.

__Syntax__:

```s
npm install -g yarn
```

__Note__ : `I am using npm in this project`.


## Some npm commands

__Syntax__:

```s    
npm init
```


## Parcel

Here we are using `Parcel` as a `bundler`.

__Syntax__:

```s
npm install -D parcel-bundler
```

D = `--save-dev` (as a development dependency)

## What is package.json?

`package.json` is a `file` that `lists` all the `dependencies` of your `project`.

__Syntax__:

```s
npm install
```

## what is caret and tilde?

`^` = `caret` (e.g. `^1.2.3` means `install` `version` `1.x.x` but `not` `beyond` `1.3.0`)

`~` = `tilde` (e.g. `~1.2.3` means `install` `version` `1.2.x` but `not` `beyond` `1.2.3`)


## What is package-lock.json?

`package-lock.json` is an `automatically` `generated` `file` based on the exact versions of `npm` `dependencies` that were `installed` for your `project`. `package-lock.json` is `automatically` `generated` for any operations where `npm` `installs` `packages`.

__Note__: Never push `node_modules` to remote repository.

__Note__: Never try to change or edit the node modules

__Reason__: `node_modules` is a `huge` `folder` and `it` `contains` `all` `the` `dependencies` of your `project`. So, it is not a good practice to push `node_modules` to remote repository.
You can use `.gitignore` file to ignore `node_modules` folder.


#### Install React and React DOM

__Syntax__:

```s
npm install react react-dom
```


**Note**: `React` is the `library` and `ReactDOM` is the `renderer`.


to ignite our app we use a command 

__Syntax__:

```s    
npx parcel index.html
```
(npx is a package runner tool that comes with npm 5.2+ and higher, see instructions for older npm versions)


__Note__: type module is used to import the react library




 * PARCEL IS A BUNDLER 
 * Creatd A Server
 * HMR ---> hot module Replacment
 * File watcher algorithm ----> written in C++
 * BUNDLing
 * MINIFY
 * CLEANING OUR CODE
 * Dev and production build
 * Super fast build algorithm
 * Image Optimization
 * Caching while devlopement
 * compression also
 * Comptable with older version of browser
 * it add polifill
 * Https on local dev 
 * port Number
 * Consistent Hashing Algorithm
 * Zero config 
 * 
 * Tree Shaking --> removing unwanted code
 
 
## What is .parcel-cache?

`parcel-cache` is a `cache` folder that `contains` `all` `the` `bundled` `files` of your `project`. `parcel-cache` is `automatically` `generated` for any operations where `parcel` `bundled` `files`.

`devlopment` `build`:

```s    
npx parcel index.html
```

`production` `build`:

```s
npx parcel build index.html
```


__Note__: Never push `.parcel-cache` to remote repository.


## What is dest folder?

Dest folder is a folder that contains all the bundled files of your project. Dest folder is automatically generated for any operations where parcel bundled files.

__Note__: Never push `dest` to remote repository.

## What is inside the dest folder?


## what is production build?

Production build is a build that is used to deploy our app to the production server.

## transitive dependecies

`Transitive dependencies` are `dependencies` of `dependencie`s. For example, if you `install` a package that depends on another package, the second package is a `transitive dependency` of the first package.


This is kind of jargon, but it's important to understand that `transitive dependencies` are `dependencies` of `dependencies`.


## READ PARCEL DOCUMENTATION:



### WHAT IS BROWSERLIST ?

BrowserList is a tool that allows you to specify the browsers you want to support and it will use that information to apply a set of polyfills.

#### POlyfills:

Polyfills are code that adds a feature which the engine may lack. In other words, a polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

__website__

```s
https://browserlist.dev/
```
```
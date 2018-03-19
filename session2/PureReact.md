## Page Setup
- In order to work with React in the browser, we need to include two libraries: React and ReactDOM.  
**React** is the library for creating views.  
**ReactDOM** is the library used
to actually render the UI in the browser.

```  HTML document setup with React
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Pure React Samples</title>
</head>
<body>
  <!-- Target container -->
  <div class="react-container"></div>
  <!-- React library & ReactDOM-->
  <script src="https://unpkg.com/react@15.4.2/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@15.4.2/dist/react-dom.js"></script>
  <script>
  // Pure React and JavaScript code
</script>
</body>
</html>
```

## The Virtual DOM
- HTML is simply a set of instructions that a browser follows when constructing the
document object model, or DOM. The elements that make up an HTML document
become DOM elements when the browser loads HTML and renders the user interface.

``` html
<section id="baked-salmon">
  <h1>Baked Salmon</h1>
  <ul class="ingredients">
    <li>1 lb Salmon</li>
    <li>1 cup Pine Nuts</li>
    <li>2 cups Butter Lettuce</li>
    <li>1 Yellow Squash</li>
    <li>1/2 cup Olive Oil</li>
    <li>3 cloves of Garlic</li>
  </ul>
  <section class="instructions">
  <h2>Cooking Instructions</h2>
    <p>Preheat the oven to 350 degrees.</p>
    <p>Spread the olive oil around a glass baking dish.</p>
    <p>Add the salmon, garlic, and pine nuts to the dish.</p>
    <p>Bake for 15 minutes.</p>
    <p>Add the yellow squash and put back in the oven for 30 mins.</p>
    <p>Remove from oven and let cool for 15 minutes.
       Add the lettuce and serve.</p>
  </section>
</section>
```

- AJAX SPA
- DOM API 
  + document.createElement
  + document.appendChild

- React is a library that is designed to update the browser DOM for us. We no longer
have to be concerned with the complexities associated with building performant SPAs
because React can do that for us. With React, we do not interact with the DOM API
directly. Instead, we interact with a virtual DOM, or set of instructions that React will
use to construct the UI and interact with the browser.  

- The virtual DOM is made up of React elements, which conceptually seem similar to
HTML elements, but are actually JavaScript objects. It is much faster to work directly
with JavaScript objects than it is to work with the DOM API. We make changes to a
JavaScript object, the virtual DOM, and React renders those changes for us using the
DOM API as efficiently as possible.

## React Elements
- The browser DOM is made up of DOM elements. Similarly, the React DOM is made
up of React elements. DOM elements and React elements may look the same, but
they are actually quite different. A React element is a description of what the actual
DOM element should look like. In other words, React elements are the instructions
for how the browser DOM should be created.

``` javascript
React.createElement("h1", null, "Baked Salmon")
<h1>Baked Salmon</h1>
```

``` javascript
React.createElement("h1", {id: "recipe-0", 'data-type': "title"},"Baked Salmon") 
<h1 data-reactroot id="recipe-0" data-type="title">Baked Salmon</h1>
```

> **data-reactroot** will always appear as an attribute of the root ele‐
ment of your React component. Prior to version 15, React IDs were
added to each node that was a part of your component. This helped
with rendering and keeping track of which elements needed to be
updated. Now, there is only an attribute added to the root, and ren‐
dering is kept track of based on the hierarchy of elements.

``` javascript
{
  $$typeof: Symbol(React.element),
  "type": "h1",
  "key": null,
  "ref": null,
  "props": {"children": "Baked Salmon"},
  "_owner": null,
  "_store": {}
}
```

## ReactDOM
- ReactDOM contains the tools necessary to render React elements in the browser.
ReactDOM is where we will find the render method as well as the **renderToString**
and **renderToStaticMarkup** methods that are used on the server.

``` javascript
var dish = React.createElement("h1", null, "Baked Salmon")
ReactDOM.render(dish, document.getElementById('react-container'))
```

``` html
<body>
  <div id="react-container">
    <h1>Baked Salmon</h1>
  </div>
</body>  
```

## Children
- ReactDOM allows you to render a single element to the DOM.6 React tags this as
data-reactroot. All other React elements are composed into a single element using
nesting.
- React renders child elements using props.children. 

``` html
<ul>
  <li>1 lb Salmon</li>
  <li>1 cup Pine Nuts</li>
  <li>2 cups Butter Lettuce</li>
  <li>1 Yellow Squash</li>
  <li>1/2 cup Olive Oil</li>
  <li>3 cloves of Garlic</li>
</ul>
```
``` javascript
React.createElement(
  "ul",
  null,
  React.createElement("li", null, "1 lb Salmon"),
  React.createElement("li", null, "1 cup Pine Nuts"),
  React.createElement("li", null, "2 cups Butter Lettuce"),
  React.createElement("li", null, "1 Yellow Squash"),
  React.createElement("li", null, "1/2 cup Olive Oil"),
  React.createElement("li", null, "3 cloves of Garlic")
)
```
``` javascript
{
  "type": "ul",
  "props": {
  "children": [
    { "type": "li", "props": { "children": "1 lb Salmon" } … },
    { "type": "li", "props": { "children": "1 cup Pine Nuts"} … },
    { "type": "li", "props": { "children": "2 cups Butter Lettuce" } … },
    { "type": "li", "props": { "children": "1 Yellow Squash"} … },
    { "type": "li", "props": { "children": "1/2 cup Olive Oil"} … },
    { "type": "li", "props": { "children": "3 cloves of Garlic"} … }
    ]
    ...
  }
}
```

> **className in React**  
Any element that has an HTML class attribute is using className
for that property instead of class. Since class is a reserved word
in JavaScript, we have to use className to define the class
attribute of an HTML element.
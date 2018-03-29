
## React with JSX
### React Elements as JSX
- Facebook’s React team released JSX when they released React to provide a concise
syntax for creating complex DOM trees with attributes. They also hoped to make
React more readable, like HTML and XML.
In JSX, an element’s type is specified with a tag. The tag’s attributes represent the
properties. The element’s children can be added between the opening and closing
tags.
![JSX](JSX.png)

### JSX Tips
#### Nested components
- *IngredientsList with three nested Ingredient components*
``` html
<IngredientsList>
  <Ingredient />
  <Ingredient />
  <Ingredient />
</IngredientsList>
```

#### className
- Since class is a reserved word in JavaScript, className is used to define the class
attribute instead:
``` html
<h1 className="fancy">Baked Salmon</h1>
```

#### JavaScript expressions
- JavaScript expressions are wrapped in curly braces and indicate where variables shall
be evaluated and their resulting values returned.
``` html
<h1>{this.props.title}</h1>
<input type="checkbox" defaultChecked={false} />
```

#### Evaluation
- The JavaScript that is added in between the curly braces will get evaluated. 
``` javascript
<h1>{"Hello" + this.props.title}</h1>

<h1>{this.props.title.toLowerCase().replace}</h1>

function appendTitle({this.props.title}) {
  console.log(`${this.props.title} is great!`)
}
```

#### Mapping arrays to JSX
- JSX is JavaScript, so you can incorporate JSX directly inside of JavaScript functions.
- *Array.map() with JSX*
``` javascript
<ul>
  {this.props.ingredients.map((ingredient, i) =>
    <li key={i}>{ingredient}</li>
  )}
</ul>
```

### Babel
- Most software languages allow you to compile your source code. JavaScript is an
interpreted language: the browser interprets the code as text, so there is no need to
compile JavaScript. However, not all browsers support the latest ES6 and ES7 syntax,
and no browser supports JSX syntax. Since we want to use the latest features of Java‐
Script along with JSX, we are going to need a way to convert our fancy source code
into something that the browser can interpret. This process is called transpiling, and
it is what Babel is designed to do.
- *Including babel-core*
``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React Examples</title>
  </head>
  <body>
    <div class="react-container"></div>
    <!-- React Library & React DOM -->
    <script src="https://unpkg.com/react@15.4.2/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15.4.2/dist/react-dom.js"></script>
    <script
    src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.29/browser.js">
    </script>
    <script type="text/babel">
    // JSX code here. Or link to separate JavaScript file that contains JSX.
    </script>
  </body>
</html>
```

### Recipes as JSX
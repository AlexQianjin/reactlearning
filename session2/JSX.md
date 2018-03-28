
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
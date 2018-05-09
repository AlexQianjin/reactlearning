## Props, State, and the Component Tree
### Property Validation
- JavaScript is a loosely typed language, which means that the data type of a variable’s
value can change. For example, you can initially set a JavaScript variable as a string,
then change its value to an array later, and JavaScript will not complain. Managing
our variable types inefficiently can lead to a lot of time spent debugging applications.

- React components provide a way to specify and validate property types. Using this
feature will greatly reduce the amount of time spent debugging applications. Supply‐
ing incorrect property types triggers warnings that can help us find bugs that may
have otherwise slipped through the cracks.

- React has built-in automatic property validation for the variable types, as shown in Table.

Type | Validator
-----|----------
Arrays | React.PropTypes.array
Boolean | React.PropTypes.bool
Functions | React.PropTypes.func
Numbers | React.PropTypes.number
Objects | React.PropTypes.object
Strings | React.PropTypes.string

#### ES6 Classes and Stateless Functional Components
- ES6 class
```
class Summary extends React.Component { render() {
    const {ingredients, steps, title} = this.props return (
        <div className="summary">
            <h1>{title}</h1>
            <p>
               <span>{ingredients} Ingredients | </span>
               <span>{steps} Steps</span>
            </p> 
        </div>
    ) }
}

Summary.propTypes = {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    title: (props, propName) =>
           (typeof props[propName] !== 'string') ? new Error("A title must be a string") : (props[propName].length > 20) ?
    new Error(`title is over 20 characters`) :null
}

Summary.defaultProps = {
    ingredients: 0,
    steps: 0,
    title: "[recipe]"
}
```

- Stateless functional component
```
const Summary = ({ ingredients, steps, title }) => { return <div>
    <h1>{title}</h1>
    <p>{ingredients} Ingredients | {steps} Steps</p>
  </div>
}

Summary.propTypes = {
    ingredients: React.PropTypes.number.isRequired,
    steps: React.PropTypes.number.isRequired
}

Summary.defaultProps = {
    ingredients: 1,
    steps: 1
}
```

### Refs
- References, or refs, are a feature that allow React components to interact with child
elements. The most common use case for refs is to interact with UI elements that col‐
lect input from the user. Consider an HTML form element. These elements are ini‐
tially rendered, but the users can interact with them. When they do, the component
should respond appropriately.
- *AddColorForm*
```
import { Component } from 'react'
class AddColorForm extends Component {
    render() {
        return (
            <form onSubmit={e=>e.preventDefault()}>
                <input type="text"
                       placeholder="color title..." required/>
                <input type="color" required/>
                <button>ADD</button>
            </form>
        )
    }
}
```
-  AddColorForm with submit method
```
import { Component } from 'react'
class AddColorForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e) {
        const { _title, _color } = this.refs
        e.preventDefault();
        alert(`New Color: ${_title.value} ${_color.value}`)
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title"
                    type="text"
                    placeholder="color title..." required />
                <input ref="_color"
                    type="color" required />
                <button>ADD</button>
            </form>
        )
    }
}
```

#### Inverse Data Flow
- It’s nice to have a form that echoes back input data in an alert, but there is really no
way to make money with such a product. What we need to do is collect data from the
user and send it somewhere else to be handled. This means that any data collected
may eventually make its way back to the server, which we will cover in Chapter 12.
First, we need to collect the data from the form component and pass it on.
A common solution for collecting data from a React component is inverse data flow.

- It is similar to, and sometimes described as, two-way data binding. It involves sending
a callback function to the component as a property that the component can use to
pass data back as arguments. It’s called inverse data flow because we send the compo‐
nent a function as a property, and the component sends data back as function argu‐
ments.

```
const logColor = (title, color) =>
    console.log(`New Color: ${title} | ${value}`)
<AddColorForm onNewColor = { logColor } />
```
```
submit() {
    const { _title, _color } = this.refs
    this.props.onNewColor(_title.value, _color.value)
    _title.value = ''
    _color.value = '#000000'
    _title.focus()
}
```
```
<AddColorForm onNewColor={(title, color) => {
    console.log(`TODO: add new ${title} and ${color} to the list`)
    console.log(`TODO: render UI with new Color`)
}} />
```
#### Optional Function Properties
- In order to make two-way data binding optional, you must first
check to see if the function property exists before trying to invoke
it. In the last example, not supplying an onNewColor function prop‐
erty would lead to a JavaScript error because the component will
try to invoke an undefined value.
- This can be avoided by first checking for the existence of the func‐
tion property:
```
if (this.props.onNewColor) {
 this.props.onNewColor(_title.value, _color.value)
}
```
- A better solution is to define the function property in the compo‐
nent’s propTypes and defaultProps:
```
AddColorForm.propTypes = {
 onNewColor: PropTypes.func
}
AddColorForm.defaultProps = {
 onNewColor: f=>f
}
```
#### Refs in Stateless Functional Components
- Let’s refactor AddColorForm as a stateless functional component:
```
const AddColorForm = ({ onNewColor = f => f }) => {
    let _title, _color
    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
    return (
        <form onSubmit={submit}>
            <input ref={input => _title = input}
                type="text"
                placeholder="color title..." required />
            <input ref={input => _color = input}
                type="color" required />
            <button>ADD</button>
        </form>
    )
}
```

### React State Management
- Thus far we’ve only used properties to handle data in React components. Properties
are immutable. Once rendered, a component’s properties do not change. In order for
our UI to change, we would need some other mechanism that can rerender the com‐
ponent tree with new properties. React state is a built-in option for managing data
that will change within a component. When application state changes, the UI is
rerendered to reflect those changes.
- State can be expressed in React components with a single JavaScript object. When the
state of a component changes, the component renders a new UI that reflects those
changes. What can be more functional than that? Given some data, a React compo‐
nent will represent that data as the UI. Given a change to that data, React will update
the UI as efficiently as possible to reflect that change

#### Introducing Component State
- State represents data that we may wish to change within a component. 
- *Star component*
```
const Star = ({ selected = false, onClick = f => f }) =>
    <div className={(selected) ? "star selected" : "star"}
        onClick={onClick}>
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}
```
- *StartRating component*
```
class StarRating extends Component {

    constructor(props) {
        super(props)
        this.state = {
            starsSelected: 0
        }
        this.change = this.change.bind(this)
    }

    change(starsSelected) {
        this.setState({ starsSelected })
    }

    render() {
        const { totalStars } = this.props
        const { starsSelected } = this.state
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i}
                        selected={i < starsSelected}
                        onClick={() => this.change(i + 1)}
                    />
                )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }

}
StarRating.propTypes = {
    totalStars: PropTypes.number
}
StarRating.defaultProps = {
    totalStars: 5
}
```
- When an ES6 component is mounted, its constructor is invoked with the properties
injected as the first argument. Those properties are, in turn, sent to the superclass by
invoking super. In this case, the superclass is React.Component. Invoking super initi‐
alizes the component instance, and React.Component decorates that instance with
functionality that includes state management. After invoking super , we can initialize
our component’s state variables.
- Once the state is initialized, it operates as it does in createClass components. State
can only be changed by calling this.setState, which updates specific parts of the
state object. After every setState call, the render function is called, updating the
state with the new UI.

#### Initializing State from Properties
- We can initialize our state values using incoming properties. There are only a few
necessary cases for this pattern. The most common case for this is when we create a
reusable component that we would like to use across applications in different compo‐
nent trees.
- *StartRating component*
```
class StarRating extends Component {

    constructor(props) {
        super(props)
        this.state = {
            starsSelected: props.starsSelected || 0
        }
        this.change = this.change.bind(this)
    }

    change(starsSelected) {
        this.setState({ starsSelected })
    }

    render() {
        const { totalStars } = this.props
        const { starsSelected } = this.state
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i}
                        selected={i < starsSelected}
                        onClick={() => this.change(i + 1)}
                    />
                )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
}
StarRating.propTypes = {
    totalStars: PropTypes.number
}
StarRating.defaultProps = {
    totalStars: 5
}
```

### State Within the Component Tree
- All of your React components can have their own state, but should they? The joy of
using React does not come from chasing down state variables all over your applica‐
tion. The joy of using React comes from building scalable applications that are easy to
understand. The most important thing that you can do to make your application easy
to understand is limit the number of components that use state as much as possible.
- In many React applications, it is possible to group all state data in the root compo‐
nent. State data can be passed down the component tree via properties, and data can
be passed back up the tree to the root via two-way function binding. The result is that
all of the state for your entire application exists in one place. This is often referred to
as having a “single source of truth.”

#### Color Organizer App Overview
- The color organizer allows users to add, name, rate, and remove colors in their cus‐
tomized lists. The entire state of the color organizer can be represented with a single
array:
```
{
    colors: [
        {
            "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
            "title": "ocean at dusk",
            "color": "#00c4e2",
            "rating": 5
        },
        {
            "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
            "title": "lawn",
            "color": "#26ac56",
            "rating": 3
        },
        {
            "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
            "title": "bright red",
            "color": "#ff0000",
            "rating": 0
        }
    ]
}
```
#### Passing Properties Down the Component Tree
- *StarRating Component*
```
const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) =>
    <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>
            <Star key={i}
                selected={i < starsSelected}
                onClick={() => onRate(i + 1)} />
        )}
        <p>{starsSelected} of {totalStars} stars</p>
    </div>
```
- *Color component*
```
const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f }) =>
    <section className="color">
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className="color"
            style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating starsSelected={rating} onRate={onRate} />
        </div>
    </section>
```
- *ColorList component*
```
const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id}
                    {...color}
                    onRate={(rating) => onRate(color.id, rating)}
                    onRemove={() => onRemove(color.id)} />
            )
        }
    </div>
```
- *App*
```
import { Component } from 'react'
import { v4 } from 'uuid'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
        this.addColor = this.addColor.bind(this)
        this.rateColor = this.rateColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }
    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ]
        this.setState({ colors })
    }
    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
                color :
                {
                    ...color,
                    rating
                }
        )
        this.setState({ colors })
    }
    removeColor(id) {
        const colors = this.state.colors.filter(
            color => color.id !== id
        )
        this.setState({ colors })
    }
    render() {
        const { addColor, rateColor, removeColor } = this
        const { colors } = this.state
        return (
            <div className="app">
                <AddColorForm onNewColor={addColor} />
                <ColorList colors={colors}
                    onRate={rateColor}
                    onRemove={removeColor} />
            </div>
        )
    }
}
```
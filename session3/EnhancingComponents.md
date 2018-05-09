## Enhancing Components
### Component Lifecycles
- The component lifecycle consists of methods that are invoked in series when a com‐
ponent is mounted or updated. These methods are invoked either before or after the
component renders the UI. In fact, the render method itself is a part of the compo‐
nent lifecycle. There are two primary lifecycles: the mounting lifecycle and the updat‐
ing lifecycle.

#### Mounting Lifecycle
- The mounting lifecycle consists of methods that are invoked when a component is
mounted or unmounted. In other words, these methods allow you to initially set up
state, make API calls, start and stop timers, manipulate the rendered DOM, initialize
third-party libraries, and more. These methods allow you to incorporate JavaScript to
assist in the initialization and destruction of a component.

ES6 Class |
----------|
constructor(props)|
componentWillMount()|
render()|
componentDidMount()|
componentWillUnmount()|

- Let’s use the componentWillMount method to initialize a request for some members.
When we get a successful response, we will update the state. Remember the
getFakeMembers promise that we created in Chapter 2? We will use that to load a
random list of members from randomuser.me:
```
const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () => (request.status == 200) ?
        resolves(JSON.parse(request.response).results) :
        reject(Error(request.statusText))
    request.onerror = err => rejects(err)
    request.send()
})
```
- We will use this promise in the componentWillMount method in a MemberList com‐
ponent. This component will use a Member component to display each user’s picture,
name, email address, and location:
```
const Member = ({ email, picture, name, location }) =>
    <div className="member">
        <img src={picture.thumbnail} alt="" />
        <h1>{name.first} {name.last}</h1>
        <p><a href={"mailto:" + email}>{email}</a></p>
        <p>{location.city}, {location.state}</p>
    </div>

class MemberList extends Component {
    constructor() {
        super()
        this.state = {
            members: [],
            loading: false,
            error: null
        }
    }
    componentWillMount() {
        this.setState({ loading: true })
        getFakeMembers(this.props.count).then(
            members => {
                this.setState({ members, loading: false })
            },
            error => {
                this.setState({ error, loading: false })
            }
        )
    }

    componentWillUpdate() {
        console.log('updating lifecycle')
    }

    render() {
        const { members, loading, error } = this.state
        return (
            <div className="member-list">
                {(loading) ?
                    <span>Loading Members</span> :
                    (members.length) ?
                        members.map((user, i) =>
                            <Member key={i} {...user} />
                        ) :
                        <span>0 members loaded...</span>
                }
                {(error) ? <p>Error Loading Members: error</p> : ""}
            </div>
        )
    }
}
```
- Initially, when the component is mounted, MemberList has an empty array for mem
bers and loading is false. In the componentWillMount method, the state is changed
to reflect the fact that a request was made to load some users. Next, while waiting for
the request to complete, the component is rendered. Because loading is now true, a
message will be displayed alerting the user to the latency. When the promise passes or
fails, the loading state is returned to false and either the members have been loaded
or an error has been returned. Calling setState at this point will rerender our UI
with either some members or an error.
- The other methods of the component mounting lifecycle include componentDidMount
and componentWillUnmount. componentDidMount is invoked just after the component
has rendered, and componentWillUnmount is invoked just before the component is
unmounted.
- componentDidMount is another good place to make API requests. This method is
invoked after the component has rendered, so any setState calls from this method
will kick off the updating lifecycle and rerender the component.
- componentDidMount is also a good place to initialize any third-party JavaScript that
requires a DOM. For instance, you may want to incorporate a drag-and-drop library
or a library that handles touch events. Typically, these libraries require a DOM before
they can be initialized.
- Another good use for componentDidMount is to start background processes like inter‐
vals or timers. Any processes started in componentDidMount or componentWillMount
can be cleaned up in componentWillUnmount. You don’t want to leave background
processes running when they are not needed.

#### Updating Lifecycle
- The updating lifecycle is a series of methods that are invoked when a component’s
state changes or when new properties are received from the parent. This lifecycle can
be used to incorporate JavaScript before the component updates or to interact with
the DOM after the update. Additionally, it can be used to improve the performance of
an application because it gives you the ability to cancel unnecessary updates.
- The updating lifecycle kicks off every time setState is called. Calling setState
within the updating lifecycle will cause an infinite recursive loop that results in a
stack overflow error. Therefore, setState can only be called in componentWillRecei
veProps, which allows the component to update state when its properties are upda‐
ted.
The updating lifecycle methods include:

- **componentWillReceiveProps(nextProps)**
  - Only invoked if new properties have been passed to the component. This is the
    only method where setState can be called.
- **shouldComponentUpdate(nextProps, nextState)**
  - The update lifecycle’s gatekeeper—a predicate that can call off the update. This
    method can be used to improve performance by only allowing necessary updates.
- **componentWillUpdate(nextProps, nextState)**
  - Invoked just before the component updates. Similar to componentWillMount,
    only it is invoked before each update occurs.
- **componentDidUpdate(prevProps, prevState)**
  - Invoked just after the update takes place, after the call to render. Similar to       componentDidMount, but it is invoked after each update.
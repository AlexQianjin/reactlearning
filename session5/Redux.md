## Redux
- Redux is Flux-like, but it is not exactly Flux. It has actions,
action creators, a store, and action objects that are used to change state. Redux sim‐
plifies the concepts of Flux a bit by removing the dispatcher, and representing appli‐
cation state with a single immutable object. Redux also introduces reducers, which are
not a part of the Flux pattern. Reducers are pure functions that return a new state
based on the current state and an action: (state, action) => newState.

### State
- The idea of storing state in one place isn’t so crazy. In fact, we did it in the last chap‐
ter. We stored it in the root of our application. In pure React or Flux apps, storing
state in as few objects as possible is recommended. In Redux, it’s a rule.

- When you hear that you have to store state in one place, it might seem like an unrea‐
sonable requirement, especially when you have different types of data. Let’s consider
how this can be achieved with an application that has many different types of data.
We’ll look at a social media app that has state spread out across different components
(Figure 8-1). The app itself has user state. All of the messages are stored in state under
that. Each message has its own state, and all of the posts are stored under the posts
component.
![State-8-1](State-8-1.png)

- An app structured like this may work well, but as it grows it may be hard to determine the overall state of the application. It may also become cumbersome to understand where updates are coming from, considering that each component will mutate its own state with internal setState calls.

- What messages are expanded? What posts have been read? In order to figure out these details, we must dive into the component tree and track down the state inside of individual components.

- Redux simplifies the way we view state in our application by requiring us to store all state data in a single object. Everything we need to know about the application is in one place: a single source of truth. We could construct the same application with
Redux by moving all of the state data into a single location (see Figure 8-2).
![State-8-2](State-8-2.png)
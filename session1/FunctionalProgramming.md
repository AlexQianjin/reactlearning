# Functional Programming with JavaScript
## Immutability
- To mutate is to change, so to be immutable is to be unchangeable. In a functional pro‐
gram, data is immutable. It never changes.

## Pure Functions
- A pure function is a function that returns a value that is computed based on its argu‐
ments. Pure functions take at least one argument and always return a value or
another function. They do not cause side effects, set global variables, or change any‐
thing about application state. They treat their arguments as immutable data.
- Rules
  + The function should take in at least one argument.
  + The function should return a value or another function.
  + The function should not change or mutate any of its arguments.

## Data Transformations
- How does anything change in an application if the data is immutable? Functional
programming is all about transforming data from one form to another. We will pro‐
duce transformed copies using functions. These functions make our code less imper‐
ative and thus reduce complexity.
- Two Core Functions
  + Array.map
  + Array.reduce

## Higher-Order Functions
- Higher-order functions are functions that can manipulate other functions. They can
take functions in as arguments, or return functions, or both.
- *Currying* is a functional technique that involves the use of higher-order functions.
Currying is the practice of holding on to some of the values needed to complete an
operation until the rest can be supplied at a later point in time. This is achieved
through the use of a function that returns another function, the curried function

## Recursion
- Recursion is a technique that involves creating functions that recall themselves.

## Composition
- Functional programs break up their logic into small pure functions that are focused
on specific tasks. Eventually, you will need to put these smaller functions together.
Specifically, you may need to combine them, call them in series or parallel, or com‐
pose them into larger functions until you eventually have an application.
- Chaining is one composition technique, but there are others. The goal of composition
is to “generate a higher order function by combining simpler functions.”

## Putting It All Together
- Following these three simple rules will help you stay on target.
  1. Keep data immutable.
  2. Keep functions pure—accept at least one argument, return data or another function.
  3. Use recursion over looping (wherever possible).
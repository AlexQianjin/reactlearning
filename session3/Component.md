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
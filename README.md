# Getting Started with Create React App
### `npm start`

### `statefull vs statless components`
### `controlled vs uncontrolled components`
- How can you communicate from one of your components to a parent (i.e. higher level) component?
  - Ans :- You can accept a function via props and call it from inside the lower-level(child) component to then trigger some action in the parent component (which passed the function).

### `useState`
- Create some "state" value(via useState) which you can then change and output in JSX.
- Why do you need this extra "state" concept instead of regular JS(Venilla JS) variables which you change and use?
  - Because standard JS variables don't cause React components to be re-evaluated. (React doesn't care whether you changed some variable values. It'll not re-evaluate the component function. It only does that for changes to registered state values (created via useState))
- useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. Calling that function will then also trigger React to re-evaluate the component.
- If you update state that depends on the previous state, you should use the "function form" of the state updating function instead.
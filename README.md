# Getting Started with Create React App
### `npm start`

### `statefull vs statless components`
### `controlled vs uncontrolled components`
- How can you communicate from one of your components to a parent (i.e. higher level) component?
  - Ans :- You can accept a function via props and call it from inside the lower-level(child) component to then trigger some action in the parent component (which passed the function).
  - Controlled Components - 
      - > whenever we use two way binding you are controlling a component.
      - > It means that a value which is used in the component (like the value selected in the dropdown) is passed on to a parent component through props and is received from the parent component.
      - > The value and handles the value does not belong to the particular component which is called a controlled component.

### `useState`
- Create some "state" value(via useState) which you can then change and output in JSX.
- Why do you need this extra "state" concept instead of regular JS(Venilla JS) variables which you change and use?
  - Because standard JS variables don't cause React components to be re-evaluated. (React doesn't care whether you changed some variable values. It'll not re-evaluate the component function. It only does that for changes to registered state values (created via useState))
- useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. Calling that function will then also trigger React to re-evaluate the component.
- If you update state that depends on the previous state, you should use the "function form" of the state updating function instead.
- For example,
  ```
  setExpenseInput({
    ...expenseInput,
    enteredTitle: event.target.value,
  }); // It's will also working fine
  ```

  - But this is a good practice, while updating single property of a state.
  - Key Point :- If your state update depends on the previous state use this (prevState) function concept.
    
  ```
  setExpenseInput((prevState) => {
        return { ...prevState, enteredTitle: event.target.value };
  });
  ```

### `Bottom Up & Lifting up the State`
- Child (ExpenseForm) Component to Parent(NewExpense) Component Communication (Bottom-up)
  
- ---Bottom Up---
  - Concept of moving data from a child to a parent component by utilizing props to receive a function from the parent component which we call in the child component.
- ---Lifting the State Up--
    - By passing our generated state data from the new expense (ExpenseForm -> NewExpense) to the App component.
    - We are passing data up to some parent component because we either need that data directly in the particular component (eg., App component) or we then want to pass that data down to another component via props.
     
### `Key Points`

-  ```event.preventDefault()```  This is default Javascript behavior. This method is, prevent the application from default reloading function.

  ### `map()`
  - Why should you add the special "key" prop to list JSX elements?
    - > It's required for React to correctly identity and update(if needed) the list elements. It's a unique identification criteria for every element.

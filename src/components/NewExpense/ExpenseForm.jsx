import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [expenseInput, setExpenseInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setExpenseInput({
    //   ...expenseInput,
    //   enteredTitle: event.target.value,
    // }); // It's will also working fine
    /**
     * But this is a good practice, while updating single property of a state.
     * Key Point :- If your state update depends on the previous state,
     * use this (prevState) function concept.
     */
    // setExpenseInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setExpenseInput({
    //   ...expenseInput,
    //   enteredAmount: event.target.value,
    // });
    // setExpenseInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setExpenseInput({
    //   ...expenseInput,
    //   enteredDate: event.target.value,
    // });
    // setExpenseInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    /**This is default Javascript behavior.
     * This method is, prevent the application from default reloading function.
     */
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    //Child (ExpenseForm) Component to Parent(NewExpense) Component Communication (Bottom-up)
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");
  const [expenseInput, setExpenseInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setExpenseInput({
      ...expenseInput,
      enteredTitle: event.target.value,
    });
  };
  const amountChangeHandler = (event) => {
    setExpenseInput({
      ...expenseInput,
      enteredAmount: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    setExpenseInput({
      ...expenseInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={expenseInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={expenseInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={expenseInput.enteredDate}
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

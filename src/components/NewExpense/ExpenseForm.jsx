import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    //Please refer the README.md file
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    props.onShow(false);
  };
  const cancelHandler = (event) => {
    event.preventDefault();
    setTitle("");
    setAmount("");
    setDate("");
    props.onShow(false);
  };

  if (props.enable) {
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
          <button onClick={cancelHandler}>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    );
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => props.onShow(true)}>Add Expense</button>
      </div>
    );
  }
};

export default ExpenseForm;

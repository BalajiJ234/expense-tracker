import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEnable, setIsEnable] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEnable(false);
  };

  const enableAddExpense = () => {
    setIsEnable(true);
  };

  const disableAddExpense = () => {
    setIsEnable(false);
  };

  return (
    <div className='new-expense'>
      {!isEnable && <button onClick={enableAddExpense}>Add New Expense</button>}
      {isEnable && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={disableAddExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;

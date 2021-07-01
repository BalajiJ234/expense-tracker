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
  };

  const handleEnable = (isEnable) => {
    setIsEnable(isEnable);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        enable={isEnable}
        onShow={handleEnable}
      />
    </div>
  );
};

export default NewExpense;

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //Recent expenses....
  const recentExpenses = filteredExpenses.sort((prev, next) => {
    return prev.date < next.date ? 1 : next.date < prev.date ? -1 : 0;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (recentExpenses.length > 0) {
    expensesContent = recentExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      );
    });
  }

  return (
    <Card className='expenses'>
      {/**
       * Controlled Components, -> whenever we use two way binding
       * you are controlling a component.
       * -> It means that a value which is used in the component
       * (like the value selected in the
       * dropdown) is passed on to a parent component
       * through props and is received from the parent component.
       * -> The value and handles the value does not belong to the
       * particular component which is called a controlled component.
       */}
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;

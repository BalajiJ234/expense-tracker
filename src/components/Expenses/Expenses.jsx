import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

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
      <ExpensesList items={recentExpenses} />
    </Card>
  );
};

export default Expenses;

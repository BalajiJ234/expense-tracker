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
      {props.expenses
        .sort((prev, next) =>
          prev.date < next.date ? 1 : next.date < prev.date ? -1 : 0
        ) //Recent expenses....
        .map((expense) => {
          return (
            <ExpenseItem
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;

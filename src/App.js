import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Mobile Recharge",
    amount: 597.0,
    date: new Date(2021, 6, 28),
  },
  { id: "e2", title: "Wifi Bill", amount: 942.82, date: new Date(2021, 6, 15) },
  {
    id: "e3",
    title: "Electricity Bill",
    amount: 4773.0,
    date: new Date(2021, 6, 16),
  },
  {
    id: "e4",
    title: "Mini Screwdriver Set",
    amount: 309.0,
    date: new Date(2021, 6, 27),
  },
  {
    id: "e5",
    title: "Wireless Headphone",
    amount: 1099.0,
    date: new Date(2021, 6, 27),
  },
  {
    id: "e6",
    title: "Samsung EVO Plus SSD(500GB)",
    amount: 6999.0,
    date: new Date(2021, 6, 22),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // const total_expenses = () => {
  //   const total = expenses
  //     .map((expense) => expense.amount)
  //     .reduce((prev, next) => prev + next);
  //   return total;
  // };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  //without JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  //With JSX
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      {/* <p>{total_expenses()}</p> */}
    </div>
  );
};

// const paragraph = document.createElement("p");
// paragraph.textContent = "This is a paragraph";
// document.getElementById("root").append(paragraph);
// <p>This is a paragraph</p> // it is JSX
export default App;

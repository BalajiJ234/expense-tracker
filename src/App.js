import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Mobile Recharge", amount: 597.0, date: new Date(2021, 6, 28) },
    { title: "Wifi Bill", amount: 942.82, date: new Date(2021, 6, 15) },
    { title: "Electricity Bill", amount: 4773.0, date: new Date(2021, 6, 16) },
    {
      title: "Mini Screwdriver Set",
      amount: 309.0,
      date: new Date(2021, 6, 27),
    },
    {
      title: "Wireless Headphone",
      amount: 1099.0,
      date: new Date(2021, 6, 27),
    },
    {
      title: "Samsung EVO Plus SSD(500GB)",
      amount: 6999.0,
      date: new Date(2021, 6, 22),
    },
  ];

  const total_expenses = () => {
    const total = expenses
      .map((expense) => expense.amount)
      .reduce((prev, next) => prev + next);
    return total;
  };

  const addExpenseHandler = (expense) => {
    console.log("In App.js...");
    console.log(expense);
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
      <p>{total_expenses()}</p>
    </div>
  );
};

// const paragraph = document.createElement("p");
// paragraph.textContent = "This is a paragraph";
// document.getElementById("root").append(paragraph);
// <p>This is a paragraph</p> // it is JSX
export default App;

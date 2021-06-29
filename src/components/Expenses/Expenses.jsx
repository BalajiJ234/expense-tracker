import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className='expenses'>
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

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>₹ {props.amount}</div>
        </div>
        <button style={{ marginLeft: "4px" }} onClick={clickHandler}>
          Change Title
        </button>
      </Card>
    </li>
  );
};

export default ExpenseItem;

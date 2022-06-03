// import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  /**
   * called dircetly in component not outside or nasetd
   * with use State create special kind of varible
   * a variable whic maek compnoent called again
   *
   *      useState(props.title)
   * return function which we call to assign new value to variable
   * return array contain the value it self and updated fucntion
   *
   * ex:
   * const [title,setTitle]=useState(props.title);
   */
  // const editButtonHandler = () => {
  //   console.log('edit buttion clicked');
  //   let randomNumber = Math.trunc(Math.random() * 10);
  //   setTitle(randomNumber);
  //   /**
  //    * calling setTitle funtion
  //    * make two things
  //    * 1- assing value to variable
  //    * 2- the whole component  will be executed
  //    */
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

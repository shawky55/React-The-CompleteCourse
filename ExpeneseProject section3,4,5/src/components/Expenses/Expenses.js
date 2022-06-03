import { useState } from 'react';
import Card from '../Card/Card.js';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import './Expenses.css';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart.js';
function Expenses(props) {
  const [filteredYear, setFilterYear] = useState('2022');

  function filterResult(selectedYear) {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  }

  let filterdExpenses = props.expenses.filter(
    (ele) => ele.date.getFullYear() === Number(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChnageFilter={filterResult} />
        <ExpensesChart expenses={filterdExpenses}></ExpensesChart>
        <ExpensesList filteredList={filterdExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;

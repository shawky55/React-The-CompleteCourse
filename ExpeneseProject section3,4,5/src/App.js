/**
 * imperitve is write program with clear insturcion and step by step
 * and this be harder in big project so react use declaretive
 */
import React,{ useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
let expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App () {
  
  const [initialExpenses, setExpenses] = useState(expenses)

  const addnewExpenseToList = (expenseData) => {
    setExpenses((previousEx) => [...previousEx,expenseData]);
    
  }
  console.log(initialExpenses);


  return (
    <div>
      <NewExpense onaddtoList={addnewExpenseToList} />
      <Expenses expenses={initialExpenses} />
    </div>
  );
}

export default App;

import './newExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { useState } from 'react';
function NewExpense(probs){
    const [Exstate,setExstate] = useState(false);

    const saveExpenseDataHandler=(enterdExpenseDate)=>{
        const expenseData={
            ...enterdExpenseDate,
            id:Math.random().toString(),
        };
        probs.onaddtoList(expenseData)

    }
const cancelForm=()=>{
    return setExstate(false)
}
   const AddNewEx=()=>{
       return setExstate(!Exstate)
   }
    return (
        <div className="new-expense">
            {Exstate ? null : <button onClick={AddNewEx}>Add New Expense</button>}
            {Exstate ? <ExpenseForm onSaveExpense={saveExpenseDataHandler} onCancelExpense={cancelForm}/>:null}
        </div>
    );
};

export default NewExpense;

import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = (probs) => {
    const [titleInput, setTitleInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    /**
     * 
     * instead of using multipe state like lines previous 
     * we use one UseSatet() and it is argumnet will become object 
     */
    // const [userInput, setUserInput] = useState({
    //     titleInput: '',
    //     amoutInput: '',
    //     dateInput: '',
    // })


    const titleInputHandler = (event) => {
        // console.log(titleInput);
        setTitleInput(event.target.value);
        // setUserInput({ //2nd way
        //     ...userInput,
        //     titleInput: event.target.value
        // })

        // setUserInput((previousSate) => {//3rd way
        //     return { ...previousSate, titleInput: event.target.value }
        // })
        // console.log(userInput)
        /**
         * so what difference between 2nd and 3rd
         * two work fine
         * if there alot of states update at same time 
         * so with 2nd way i may use outdated state but 
         * with 3rd way react will alaway give me the latest snapshot of state
         */
    };

    const dateInputHandler = (event) => {
        // console.log(dateInput);
        setDateInput(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     dateInput: event.target.value,
        // })
        // console.log(userInput.dateInput)

    };
    const amountInputHandler = (event) => {
        // console.log(amountInput)
        setAmountInput(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amoutInput: event.target.value
        // })
        // console.log(userInput.amoutInput)
    };
    const submitFormHnadler = (event) => {
        event.preventDefault();
        if(titleInput&&amountInput&&dateInput){
            const expenseDate = {
                title: titleInput,
                amount: +amountInput,
                date: new Date(dateInput),
            }

            probs.onSaveExpense(expenseDate);
            setAmountInput('');
            setDateInput('');
            setTitleInput('');

        }else{
            console.log('empty fields')
        }


        
    }

    return (
    <form onSubmit={submitFormHnadler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__controls">
                            <label>Name</label>
                            <input type="text" onChange={titleInputHandler} value={titleInput}></input>
                        </div>
                        <div className="new-expense__controls">
                            <label>Amount</label>
                            <input type="number" min="0" onChange={amountInputHandler} value={amountInput}></input>
                        </div>
                        <div className="new-expense__controls">
                            <label>Date</label>
                            <input
                                type="date"
                                min="2019-1-1"
                                max="2022-12-30"
                                onChange={dateInputHandler}
                                value={dateInput}>
                            </input>
                        </div>
                    </div>
                    <div className="new-expense__actions">
                <button onClick={probs.onCancelExpense}>Cancel</button>
                        <button type="submit">Add expense</button>
                    </div>
                </form>
    
 
    );
};
export default ExpenseForm;

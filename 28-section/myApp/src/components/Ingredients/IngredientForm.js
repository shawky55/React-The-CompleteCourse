import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo((props) => {
  const [ingInput, setIngInput] = useState({
    title: '',
    amount: '',
  });
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIng(ingInput);
    // ...
  };
  const titleInputUpdate = (event) => {
    setIngInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };
  const amoutInputUpdate = (event) => {
    setIngInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={ingInput.title}
              onChange={(event) => titleInputUpdate(event)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={ingInput.amount}
              onChange={(event) => amoutInputUpdate(event)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button
              type="submit"
              onClick={() => {
                console.log(ingInput);
              }}
            >
              Add Ingredient
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;

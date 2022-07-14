import React, { useState } from 'react';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const updateIngredients = async (ingredient) => {
    let response = await fetch(
      'https://section28-reacthooks-default-rtdb.firebaseio.com/notes.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ingredient),
      }
    );
    let data = await response.json();

    setIngredients((previousState) => [
      ...previousState,
      { id: data.name, ...ingredient },
    ]);
  };

  function removeIngredient(ingredient) {
    setIngredients((previousState) =>
      previousState.filter((item) => item.id !== ingredient.id)
    );
  }
  return (
    <div className="App">
      <IngredientForm onAddIng={updateIngredients} />
      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveingredient={removeIngredient}
        ></IngredientList>
      </section>
    </div>
  );
}

export default Ingredients;

import AvailableMeals from './AvailableMeals';
import React from 'react';
import MealsSummary from './MealsSummary';

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};
export default Meals;

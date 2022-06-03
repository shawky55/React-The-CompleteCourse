import React from 'react';
import classes from './Header.module.css';
import mainImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mainImage} alt="food on table"></img>
      </div>
    </React.Fragment>
  );
}
export default Header;

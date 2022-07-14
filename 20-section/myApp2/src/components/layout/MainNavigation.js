import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>QuoteWeb</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/new-quote">
              Add Quote
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/all-quotes">
              All Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

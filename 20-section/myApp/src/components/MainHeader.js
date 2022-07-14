import classes from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      {/* <h1>
                Header
            </h1> */}
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

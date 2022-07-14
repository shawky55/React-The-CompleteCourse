import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import { useContext } from 'react';
import AtuhContext from '../../store/auth-context';
const MainHeader = () => {
  const ctx = useContext(AtuhContext);
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={ctx.isAuthenticated} onLogout={ctx.onLogout} />
    </header>
  );
};

export default MainHeader;

import React from 'react';
import AtuhContext from './store/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import { useContext } from 'react';

function App() {
  const ctx=useContext(AtuhContext)
  return (
    <>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;

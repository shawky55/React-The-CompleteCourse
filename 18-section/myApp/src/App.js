import Counter from './components/Counter';
import Header from './components/Header';
import { useSelector } from 'react-redux/es/exports';
import UserProfile from './components/UserProfile';
import React from 'react';
import Auth from './components/Auth';
import { authActions } from './sotre/index';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log(isAuth);
  return (
    <>
      <Header></Header>
      {isAuth && <UserProfile></UserProfile>}
      {!isAuth && <Auth></Auth>}

      <Counter></Counter>
    </>
  );
}

export default App;

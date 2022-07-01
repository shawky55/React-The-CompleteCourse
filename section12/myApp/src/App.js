import React, { useCallback, useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import Demo from './components/Demo/Demo';
function App() {
  console.log('PARENTS');
  // const [isOpened, setOpen] = useState(false);
  // function changeState() {
  //   setOpen((prevState) => !prevState);
  // }
  const [allowToggle, setAllowToggle] = useState(false);
  const [showText, setShowText] = useState(false);
  const toggleShowTextState = useCallback(() => {
   if(allowToggle){
     setShowText((prevState) => !prevState);
   }
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo showText={showText} />
      <Button onClick={allowToggleHandler}>Allow Tooggle</Button>
      <Button onClick={toggleShowTextState}>Click!</Button>
    </div>
  );
}

export default App;

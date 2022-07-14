import react from 'react';
import { useState, useRef, useEffect } from 'react';

const UseRef = () => {
  const [inputValue, ssetInputValue] = useState('initail text');
  const renderCounter = useRef(0);

  useEffect(() => {
    ++renderCounter.current;
  });

  return (
    <div className="App">
      <input
        value={inputValue}
        type="text"
        onChange={(e) => ssetInputValue(e.target.value)}
      ></input>
      <div>{inputValue}</div>
      <div>component renderd :{renderCounter.current}</div>
    </div>
  );
};

export default UseRef;

import { useState, useEffect } from 'react';

/**
 *
 * direction =>1 move forward
 *
 *
 */
const useCounter = (direction = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + direction * 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  return counter;
};

export default useCounter;

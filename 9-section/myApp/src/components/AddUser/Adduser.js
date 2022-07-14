import Button from '../UI/Button';
import classes from './AddUser.module.css';
import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import ErrorModel from '../ErrorModel/ErrorModel';
function Adduser(props) {
  const userName = useRef('');
  const userAge = useRef('');
  const [error, setError] = useState();
  const AddUserHandler = (event) => {
    event.preventDefault();
    console.log('submited');
    let name = userName.current.value;
    let age = userAge.current.value;
    if (name.trim().length === 0) {
      setError({
        header: 'Invalid Input (username)',
        content: 'You shoud add username',
      });
      return;
    }
    if (isNaN(parseFloat(age)) || age <= 0) {
      setError({
        header: 'Invalid input (AGE) ',
        content: 'you should add valid number to age ',
      });
      return;
    }
    let obj = {
      name: name,
      age: age,
    };
    props.onAddtoList(obj);
    clearInput(userName, userAge);
  };
  const clearInput = (...current) => {
    // current.current.value=0;
    current.forEach((current) => (current.current.value = ''));
  };
  const errorHandler = () => {
    setError(null);
    clearInput(userName, userAge);
  };
  return (
    <Card classcss={classes.input}>
      {error && (
        <ErrorModel
          title={error.header}
          message={error.content}
          errorHandler={errorHandler}
        />
      )}
      <form onSubmit={AddUserHandler}>
        <label>User Name</label>
        <input type="text" placeholder="Add new user" ref={userName}></input>
        <label>AGE</label>
        <input placeholder="Add Age" ref={userAge}></input>
        <Button type="submit">Add New User</Button>
      </form>
    </Card>
  );
}

export default Adduser;

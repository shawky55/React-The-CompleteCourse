import Button from '../UI/Button';
import classes from './AddUser.module.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ErrorModel from '../ErrorModel/ErrorModel';
function Adduser(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0) {
      setError('you should add vail username');
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
    // console.log("Name",name)
    // console.log("Age",Math.round(age))
    setName('');
    setAge(' ');
  };
  const usernameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChnageHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
    setName('');
    setAge(' ');
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
        <input
          type="text"
          min="5"
          placeholder="Add new user"
          onChange={usernameChangeHandler}
          value={name}
        ></input>
        <label>AGE</label>
        <input
          placeholder="Add Age"
          onChange={ageChnageHandler}
          value={age}
        ></input>
        <Button type="submit">Add New User</Button>
      </form>
    </Card>
  );
}
export default Adduser;

// import './CourseInput.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
let Formcontrol = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    text-decoration: ${(props) =>
      props.invalid ? 'orangered 2px underline' : ''};
    color: ${(props) => (props.invalid ? 'red' : 'green')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${(props) =>
      props.invalid ? 'rgba(255, 0, 0, 0.53)' : 'whites'};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [Valid, setVaild] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setVaild(true);
    }
    setEnteredValue(event.target.value.trim());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length === 0) {
      setVaild(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Formcontrol invalid={!Valid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </Formcontrol>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

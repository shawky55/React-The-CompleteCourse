import react, { useState } from 'react';
const SimpleInput = (props) => {
  const [name, setEnteredName] = useState('');
  function inputNameHandler(e) {
    setEnteredName(e.target.value);
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputNameHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

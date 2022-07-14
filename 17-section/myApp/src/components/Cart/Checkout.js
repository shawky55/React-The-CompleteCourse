import classes from './Checkout.module.css';
import { useRef, useState } from 'react';
const isEmpty = (value) => value.trim() === '';
const FiveChar = (value) => {
  return value.trim() !== '' && value.length === 5;
};
const Checkout = (props) => {
  const [formValidaty, setFormValidity] = useState({
    name: true,
    city: true,
    street: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = FiveChar(enteredPostal);
    console.log(enteredName, enteredNameIsValid);
    setFormValidity({
      name: enteredNameIsValid,
      city: enteredCityIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalIsValid,
    });
    const formIsValid =
      enteredNameIsValid & enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid;
    if (formIsValid) {
      props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostal,
      });
    }
  };
  const nameControlStyle = `${classes.control} ${
    formValidaty.name ? '' : classes.invalid
  }`;
  const cityControlStyle = `${classes.control} ${
    formValidaty.name ? '' : classes.invalid
  }`;
  const streetControlStyle = `${classes.control} ${
    formValidaty.name ? '' : classes.invalid
  }`;
  const postalCodeControlStyle = `${classes.control} ${
    formValidaty.name ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlStyle}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidaty.name && (
          <p className={classes.invalid}>Name not Valid,try again!</p>
        )}
      </div>
      <div className={streetControlStyle}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidaty.street && (
          <p className={classes.invalid}>location not Valid,try again!</p>
        )}
      </div>
      <div className={postalCodeControlStyle}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formValidaty.postalCode && (
          <p className={classes.invalid}>postal Code not Valid,try again!</p>
        )}
      </div>
      <div className={cityControlStyle}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidaty.city && (
          <p className={classes.invalid}>city not Valid,try again!</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

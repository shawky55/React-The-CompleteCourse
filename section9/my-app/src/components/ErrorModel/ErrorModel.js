import Button from '../UI/Button';
import ReactDom from 'react-dom';
import Card from '../UI/Card';
import classes from './ErrorModel.module.css';
const ErrorMessageContainer = (props) => {
  return (
    <Card classcss={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.errorHandler}>Ok</Button>
      </footer>
    </Card>
  );
};
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.errorHandler}></div>;
};
function ErrorModel(props) {
  return (
    <>
      {/* <Backdrop errorHandler={props.errorHandler} ></Backdrop> */}
      {ReactDom.createPortal(
        <Backdrop errorHandler={props.errorHandler} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ErrorMessageContainer
          errorHandler={props.errorHandler}
          message={props.message}
          title={props.title}
        />,
        document.getElementById('errorMessage-root')
      )}
    </>
  );
}

export default ErrorModel;

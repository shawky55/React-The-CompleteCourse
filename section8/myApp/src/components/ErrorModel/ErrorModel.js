import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './ErrorModel.module.css';
function ErrorModel(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.errorHandler}>
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
      </div>
    </div>
  );
}

export default ErrorModel;

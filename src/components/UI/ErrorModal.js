import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from '../Styles/ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>BYE</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
}

export default ErrorModal;
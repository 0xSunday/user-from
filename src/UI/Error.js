import React from "react";
import classes from "./Error.module.css";
const Error = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.handleClose}>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>

        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.handleClose} type="submit">
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Error;

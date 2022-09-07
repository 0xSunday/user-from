import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Error from "../UI/Error.js";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");
  const handleChanged = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please enter valid name and age(non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "please a valid age (age number must be greater than 0)",
      });
      return;
    }
    props.onUserList(enteredUserName, enteredAge);
    //  console.log(enteredUserName,enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const handleClose =()=>{
    setError(null)
  }
  return (
    <div>
      {error && <Error title={error.title} message={error.message} handleClose={handleClose}/>}
      <Card>
        <form onSubmit={handleChanged}>
          <div className={styles.input1}>
            <label htmlFor="username">User Name</label>
            <input
              onChange={userNameHandler}
              value={enteredUserName}
              id="username"
              type="text"
            />
          </div>

          <div className={styles.input2}>
            <label htmlFor="age">Age</label>
            <input
              onChange={ageHandler}
              value={enteredAge}
              id="age"
              type="number"
            />
          </div>

          <div className={styles.button}>
            <button type="submit">Add user</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

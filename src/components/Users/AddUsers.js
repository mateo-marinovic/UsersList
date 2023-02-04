import Card from "../Ul/Card";
import classes from "./AddUsers.module.css";
import Button from "../Ul/Button";
import ErrorModal from "../Ul/ErrorModal";
import { useState, useRef } from "react";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0) {
      setError({ title: "Invalid name", message: "Please enter valid name." });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Invalid age", message: "Please enter valid age" });
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    nameInputRef.current.value = " ";
    ageInputRef.current.value = " ";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Username</label>
          <input id="name" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

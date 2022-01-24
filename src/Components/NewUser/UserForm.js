import React, { useState } from "react";

import "./UserForm.css";

export default function Users(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.onSaveUserData(userData);
    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label>Username</label>
          <input
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
        </div>
        <div className="new-user__control">
          <label>Age (Years)</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
        </div>
      </div>
      <div className="new-user__actions">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
}

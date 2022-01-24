import React from "react";

import "./NewUser.css";
import UserForm from "./UserForm";

export default function NewUser() {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    console.log("NewUser.js");
    console.log(userData);
  };
  return (
    <div className="new-user">
      <UserForm onSaveUserData={saveUserDataHandler} />
    </div>
  );
}

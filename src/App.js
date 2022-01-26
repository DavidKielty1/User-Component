import { useState } from "react";
import UserList from "./Components/Users/UserList";
import AddUser from "./Components/AddUser/AddUser";

const DUMMY_USERS = [
  {
    name: "YoBoiBangs",
    age: 4,
    id: "e1",
  },
  {
    name: "Sybil",
    age: 2,
    id: "e2",
  },
  {
    name: "Stankz",
    age: 46,
    id: "e3",
  },
];

function App() {
  const [userList, setUserList] = useState(DUMMY_USERS);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;

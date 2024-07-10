import { useRef, useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const topRef = useRef(null);

  const addUserHandler = (uName, uAge) => {
   if (editingUser) {
    setUsersList((prevUsersList) =>
      prevUsersList.map((user) =>
        user.id === editingUser.id ? { ...user, username: uName, age: uAge } : user
      )
    );
    setEditingUser(null);
   } else {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { username: uName, age: uAge, id: Math.random().toString() },
      ];
    });
   }
  };

  const startEditUserHandler = user => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
    setEditingUser(user);
  }
  
  return (
    <div ref={topRef}>
      <AddUser onAddUser={addUserHandler} editingUser={editingUser} />
      <UserList users={usersList} onEditUser={startEditUserHandler} />
    </div>
  );
};

export default App;

import { useRef } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./AddUser.module.css";

const AddUser = props => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    props.onAddUser(username, age);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  
  return (
    <Card className={classes['input-box']}>
      <form onSubmit={formSubmitHandler}>
        <Input
          id="username"
          label="Username"
          type="text"
          ref={nameInputRef}
        />
        <Input
          id="age"
          label="Age"
          type="number"
          ref={ageInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

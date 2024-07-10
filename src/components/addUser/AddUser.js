import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErorrModal/ErrorModal";

const AddUser = props => {
  const [erorr, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  useEffect(() => {
    if (props.editingUser) {
      nameInputRef.current.value = props.editingUser.username;
      ageInputRef.current.value = props.editingUser.age;
    }
  }, [props.editingUser]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(username, age);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };


  return (
    <>
      {erorr && <ErrorModal title={erorr.title} message={erorr.message} closeButtonText='Okay' onClose={() => setError(null)} />}
      <Card className={classes['input-box']}>
        <form onSubmit={formSubmitHandler}>
          <Input id="username" label="Username" type="text" ref={nameInputRef} />
          <Input id="age" label="Age" type="number" ref={ageInputRef} />
          <Button type="submit">
            {props.editingUser ? 'Edit User' : 'Add User'}
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

import { useState } from 'react';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErorrModal/ErrorModal';
import classes from './UserItem.module.css';

const UserItem = props => {
  const [erorr, setError] = useState();

  const editHandler = () => {
    props.onEditUser(props.user);
  }

  const deleteHandler = () => {
    setError({
      title: 'Delete User',
      message: 'Are you sure you want to delete this user?',
    });
  }

  const confirmDeleteHandler = () => {
    props.onDeleteUser(props.user.id);
    setError(null);
  }

  return (
    <>
      {erorr &&
      <ErrorModal
        title={erorr.title}
        message={erorr.message} 
        closeButtonText='Cancel'
        confirmButtonText='Delete'
        onConfirm={confirmDeleteHandler}
        onClose={() => setError(null)}
      />}
      <li className={classes['user-item']}>
        <span>
          {props.user.username} ({props.user.age} years old)
        </span>
        <div className={classes.actions}>
          <Button onClick={editHandler}>Edit</Button>
          <Button onClick={deleteHandler}>Delete</Button>
        </div>
      </li>
    </>
  );
}
 
export default UserItem;
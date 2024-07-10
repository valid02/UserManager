import Button from '../UI/Button/Button';
import classes from './UserItem.module.css';

const UserItem = props => {

  const editHandler = () => {
    props.onEditUser(props.user);
  }

  return (
    <li className={classes['user-item']}>
      <span>
        {props.user.username} ({props.user.age} years old)
      </span>
      <div className={classes.actions}>
        <Button onClick={editHandler}>Edit</Button>
      </div>
    </li>
  );
}
 
export default UserItem;
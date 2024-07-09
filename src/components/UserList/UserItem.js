import classes from './UserItem.module.css';

const UserItem = props => {
  return (
    <li className={classes['user-item']}>
      {props.username} ({props.age} years old)
    </li>
  );
}
 
export default UserItem;
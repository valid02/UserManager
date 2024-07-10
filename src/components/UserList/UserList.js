import Card from "../UI/Card/Card";
import UserItem from "./UserItem";
import classes from './UserList.module.css';

const UserList = props => {

  if (props.users.length === 0) {
    return;
  }
  
  return (
    <Card className={classes['users-list']}>
      <ul>
        {props.users.map(user => (
          <UserItem key={user.id} user={user} onEditUser={props.onEditUser} />
        ))}
      </ul>
    </Card>
  );
}
 
export default UserList;
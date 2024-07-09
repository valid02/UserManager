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
          <UserItem key={user.id} username={user.username} age={user.age} />
        ))}
      </ul>
    </Card>
  );
}
 
export default UserList;
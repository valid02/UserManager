import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./AddUser.module.css";

const AddUser = () => {
  return (
    <Card className={classes['input-box']}>
      <form>
        <Input id="username" label="Username" type="text" />
        <Input id="age" label="Age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

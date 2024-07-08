import classes from './Input.module.css';

const Input = props => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
      />
    </div>
  );
};

export default Input;

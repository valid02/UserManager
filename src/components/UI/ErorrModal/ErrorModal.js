import Button from '../Button/Button';
import Card from '../Card/Card';
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClose}>{props.closeButtonText}</Button>
        {props.confirmButtonText && <Button onClick={props.onConfirm}>{props.confirmButtonText}</Button>}
      </footer>
    </Card>
  );
}

const ErrorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          closeButtonText={props.closeButtonText}
          onClose={props.onClose}
          onConfirm={props.onConfirm}
          confirmButtonText={props.confirmButtonText}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}
 
export default ErrorModal;
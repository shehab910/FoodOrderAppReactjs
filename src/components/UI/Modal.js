import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const htmlElement = document.getElementById("overlayes");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, htmlElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, htmlElement)}
    </>
  );
};

export default Modal;

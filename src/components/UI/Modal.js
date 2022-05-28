import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
   return <div className={styles.backdrop} onClick={props.onHideModal} />;
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
         {ReactDOM.createPortal(
            <Backdrop onHideModal={props.onHideModal} />,
            htmlElement
         )}
         {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            htmlElement
         )}
      </>
   );
};

export default Modal;

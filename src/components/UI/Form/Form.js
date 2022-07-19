import styles from "./Form.module.css";
const Form = (props) => {
   return (
      <div className={styles.container}>
         <div className={styles.card}>
            <h2>{props.formTitle}</h2>
            <form onSubmit={props.onSubmitHandler}>
               <div className={styles["form-group"]}>{props.children}</div>
            </form>
         </div>
      </div>
   );
};

export default Form;

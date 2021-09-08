import { useState, useRef } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +(amountInputRef.current.value);

    if(enteredAmount <= 0 || enteredAmount > 5){
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount: "
        input={{
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      {!amountIsValid && <p>Please enter a valid input (1-5).</p>}
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

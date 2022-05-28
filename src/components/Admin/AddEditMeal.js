import { useState, useEffect } from "react";
import Modal from "../UI/Modal";

import styles from "./AddEditMeal.module.css";

const initialMealState = {
   name: "",
   description: "",
   price: "",
};

const onSubmitHandler = (e) => {
   e.preventDefault();
};

function AddEditMeal(props) {
   const [mealData, setMealData] = useState({ ...initialMealState });
   const { name, description, price, id } = mealData;

   const modalTitle = props.isEdit ? "Edit Existing Meal Data" : "Add New Meal";
   const buttonText = props.isEdit ? "Save" : "Add Meal";

   useEffect(() => {
      if (props.isEdit) {
         setMealData({ ...props.meal });
      }
   }, [props.isEdit, props.meal]);

   const onChangeHandler = (e) => {
      setMealData({ ...mealData, [e.target.name]: e.target.value });
   };

   return (
      <Modal onHideModal={props.onHideModal}>
         <div className={styles.container}>
            <div className={styles.card}>
               <h2>{modalTitle}</h2>
               <form onSubmit={onSubmitHandler}>
                  <div className={styles["form-group"]}>
                     {props.isEdit && <h3>Meal id: {id}</h3>}
                     <input
                        label="Title"
                        type="text"
                        name="name"
                        placeholder="Enter the new meal title"
                        value={name}
                        onChange={onChangeHandler}
                     />
                     <input
                        label="Description"
                        type="text"
                        name="description"
                        placeholder="Enter the new meal description"
                        value={description}
                        onChange={onChangeHandler}
                     />
                     <input
                        label="Price"
                        type="number"
                        name="price"
                        placeholder="Enter the new meal price"
                        value={price}
                        onChange={onChangeHandler}
                     />
                     <button
                        onClick={(e) => props.onMealSubmit(e, mealData)}
                        className={styles.btn}
                     >
                        {buttonText}
                     </button>
                     <button onClick={props.onHideModal} className={styles.btn}>
                        Cancel
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </Modal>
   );
}

export default AddEditMeal;

import { useState } from "react";

import styles from "./AddMeal.module.css";

const initialMealState = {
   title: "",
   description: "",
   price: 0.0,
};

const onSubmitHandler = (e) => {
   e.preventDefault();
};

function AddMeal() {
   const [mealData, setMealData] = useState({ ...initialMealState });
   const { title, description, price } = mealData;

   const onChangeHandler = (e) => {
      setMealData({ ...mealData, [e.target.name]: e.target.value });
   };

   const blz = (
      <div className={styles.container}>
         <div className={styles.card}>
            <h2>Add New Meal</h2>
            <form onSubmit={onSubmitHandler}>
               <div className={styles["form-group"]}>
                  <input
                     label="Title"
                     type="text"
                     name="title"
                     placeholder="Enter the new meal title"
                     value={title}
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
                  <button className={styles.btn}>Add Meal</button>
               </div>
            </form>
         </div>
      </div>
   );

   return blz;
}

export default AddMeal;

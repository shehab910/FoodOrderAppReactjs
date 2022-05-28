import { useContext } from "react";

import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import AdminControls from "../../Admin/AdminControls";

import styles from "./MealItem.module.css";

const MealItem = (props) => {
   const cardCtx = useContext(CartContext);

   const isAdmin = props.adminControls?.showAdminControls;

   const addToCartHandler = (amount) => {
      cardCtx.addItem({
         id: props.meal.id,
         name: props.meal.name,
         price: props.meal.price,
         amount: amount,
      });
   };

   const meal = props.meal;
   const price = `$${meal.price.toFixed(2)}`;
   return (
      <li className={styles.meal}>
         <div>
            <h3>{meal.name}</h3>
            <div className={styles.description}>{meal.description}</div>
            <div className={styles.price}>{price}</div>
         </div>
         <div>
            {!isAdmin && <MealItemForm onAddToCart={addToCartHandler} />}
            {isAdmin && (
               <AdminControls
                  onDeleteHandler={(e) => {
                     props.adminControls?.onDeleteHandler(e, meal.id);
                  }}
                  onEditHandler={(e) =>
                     props.adminControls?.onEditHandler(e, meal)
                  }
               />
            )}
         </div>
      </li>
   );
};

export default MealItem;

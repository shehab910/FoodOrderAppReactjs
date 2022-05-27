import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
   const [isCheckout, setIsCheckout] = useState(false);
   const cartCtx = useContext(CartContext);

   const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

   const hasItems = cartCtx.items.length > 0;

   const cartItemAddHandler = (item) => {
      cartCtx.addItem({ ...item, amount: 1 });
   };

   const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
   };

   const cartItems = (
      <ul className={styles["cart-items"]}>
         {cartCtx.items.map((item) => (
            <CartItem
               key={item.id}
               name={item.name}
               amount={item.amount}
               price={item.price}
               onAdd={cartItemAddHandler.bind(null, item)}
               onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
         ))}
      </ul>
   );

   const orderHandler = () => {
      setIsCheckout(true);
   };

   const cartActions = (
      <div className={styles.actions}>
         <button onClick={props.onHideCart} className={styles["button--alt"]}>
            Close
         </button>
         {hasItems && (
            <button onClick={orderHandler} className={styles.button}>
               Order
            </button>
         )}
      </div>
   );

   return (
      <Modal onHideModal={props.onHideCart}>
         {cartItems}
         <div className={styles.total}>
            <span>Total Amount: </span>
            <span>{totalAmount}</span>
         </div>
         {isCheckout && <Checkout onCancel={props.onHideCart} />}
         {!isCheckout && cartActions}
      </Modal>
   );
};

export default Cart;

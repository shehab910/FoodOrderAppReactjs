import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = () => {};

  const cartItemRemoveHandler = () => {};

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler}
          onRemove={cartItemRemoveHandler} 
        />
      ))}
    </ul>
  );
  return (
    <Modal onShowCart={props.onShowCart} onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount: </span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles["button--alt"]}>
          Close
        </button>
        {hasItems && (
          <button
            onClick={() => {
              console.log("Ordering");
            }}
            className={styles.button}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;

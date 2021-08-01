import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[
        {
          id: "m1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onShowCart={props.onShowCart} onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
          <span>Total Amount: </span>
          <span>22.99</span>
      </div>
      <div className={styles.actions}>
          <button onClick={props.onHideCart} className={styles["button--alt"]}>Close</button>
          <button onClick={() => {console.log("Ordering");}} className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

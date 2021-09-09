import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
  const { items } = cartCtx;
  const btnStyles = `${styles.button} ${isBtnHighlighted ? styles.bump : ""}`;

  const numOfCartItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);

    const timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

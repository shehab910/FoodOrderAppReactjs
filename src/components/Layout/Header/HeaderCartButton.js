import { useContext } from "react";
import CartIcon from "../../UI/Icons/CartIcon";
import CartContext from "../../../store/cart-context";
import styles from "./HeaderCartButton.module.css";
import useMediaQuery from "../../custom-hooks/useMediaQuery";

const HeaderCartButton = (props) => {
   const cartCtx = useContext(CartContext);
   // const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
   const { items } = cartCtx;
   // const btnStyles = `${styles.button} ${isBtnHighlighted ? styles.bump : ""}`;

   const numOfCartItems = items.reduce((currNum, item) => {
      return currNum + item.amount;
   }, 0);

   // useEffect(() => {
   //    if (items.length === 0) {
   //       return;
   //    }
   //    setIsBtnHighlighted(true);

   //    const timer = setTimeout(() => {
   //       setIsBtnHighlighted(false);
   //    }, 300);

   //    return () => {
   //       clearTimeout(timer);
   //    };
   // }, [items]);

   const isWindowSmall = useMediaQuery("(max-width: 800px)");

   return (
      <button className={styles.button} onClick={props.onShowCart}>
         <span className={styles.icon}>
            <CartIcon />
         </span>
         {isWindowSmall || <span>Your Cart</span>}
         <span className={styles.badge}>{numOfCartItems}</span>
      </button>
   );
};

export default HeaderCartButton;

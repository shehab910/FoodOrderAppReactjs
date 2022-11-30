import mealsImage from "../../../assets/meals.jpg";

import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import LoginButton from "./LoginButton";

const Header = (props) => {
   return (
      <>
         <header className={styles.header}>
            <h2>ReactMeals</h2>
            <div className={styles.controls}>
               <HeaderCartButton onShowCart={props.onShowCart} />
               <LoginButton />
            </div>
         </header>
         <div className={styles["main-image"]}>
            <img src={mealsImage} alt="A table full of food" />
         </div>
      </>
   );
};

export default Header;

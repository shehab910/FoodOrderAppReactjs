import { useNavigate } from "react-router-dom";
import UserIcon from "../../UI/Icons/UserIcon";
import cartButtonStyles from "./HeaderCartButton.module.css";

const LoginButton = () => {
   const isLoggedIn = localStorage.getItem("token");
   const buttonText = isLoggedIn ? "Logout" : "Login";
   const nav = useNavigate();
   const onClickHandler = (e) => {
      e.preventDefault();
      if (isLoggedIn) {
         localStorage.removeItem("token");
      } else {
         nav("/login");
      }
      window.location.reload();
   };
   return (
      <>
         <button className={cartButtonStyles.button} onClick={onClickHandler}>
            <span className={cartButtonStyles.icon}>
               <UserIcon />
            </span>
            <span>{buttonText}</span>
         </button>
      </>
   );
};

export default LoginButton;

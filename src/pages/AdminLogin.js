import { useState } from "react";

import styles from "./AdminLogin.module.css";

const intialFormData = {
   email: "",
   password: "",
};

const AdminLogin = () => {
   const [formData, setFormData] = useState({ ...intialFormData });

   const { email, password } = formData;

   const onChangeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const onSubmitHandler = (e) => {
      e.preventDefault();
      setFormData({ ...intialFormData });
      console.log(formData);
   };

   return (
      <div className={styles.container}>
         <div className={styles.card}>
            <h2>Admin Panel</h2>
            <form onSubmit={onSubmitHandler}>
               <div className={styles["form-group"]}>
                  <input
                     label="Email"
                     type="email"
                     name="email"
                     placeholder="Enter your email"
                     value={email}
                     onChange={onChangeHandler}
                  />
                  <input
                     label="Password"
                     type="password"
                     name="password"
                     placeholder="Enter your password"
                     value={password}
                     onChange={onChangeHandler}
                  />
                  <button className={styles.btn}>Login</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default AdminLogin;

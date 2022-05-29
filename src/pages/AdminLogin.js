import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAsync from "../components/custom-hooks/useAsync";

import styles from "./AdminLogin.module.css";

const intialFormData = {
   email: "admin@admin.com",
   password: "admin",
};

const AdminLogin = () => {
   const [formData, setFormData] = useState({ ...intialFormData });
   const [submitted, setSubmitted] = useState(false);

   const { email, password } = formData;

   const navigate = useNavigate();

   const { loading, error, value } = useAsync(async () => {
      if (!submitted) return;

      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/users/login/`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      // console.log(data);
      const { token } = data;
      if (token) {
         localStorage.setItem("token", token);
         navigate("/admin");
      } else {
         setSubmitted(false);
      }
   }, [submitted, navigate]);

   const onSubmitHandler = (e) => {
      e.preventDefault();
      setFormData({ ...intialFormData });
      setSubmitted(true);
   };

   const onChangeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
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

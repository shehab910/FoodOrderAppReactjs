import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAsync from "../components/custom-hooks/useAsync";
import Button from "../components/UI/Form/Button";
import Form from "../components/UI/Form/Form";

const intialFormData = {
   email: "test@example.com",
   password: "123",
};

const Login = () => {
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
      const user = await response.json();
      // console.log(data);
      if (user.token) {
         // console.log(user.permission);
         localStorage.setItem("token", user.token);
         navigate("/");
      } else {
         setSubmitted(false);
      }
   }, [submitted, navigate]);

   const onSubmitHandler = (e) => {
      e.preventDefault();
      // setFormData({ ...intialFormData });
      setSubmitted(true);
   };

   const onChangeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   if (loading) return <h1>Loading...</h1>;
   if (error) return <h1>Error</h1>;
   return (
      <Form onSubmitHandler={onSubmitHandler} formTitle={"Login"}>
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
         <Button>Login</Button>
      </Form>
   );
};

export default Login;

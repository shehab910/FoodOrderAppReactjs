import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AdminLogin from "./pages/AdminLogin";

function App() {
   const [isCartOn, setIsCartOn] = useState(false);
   const showCartHandler = () => {
      setIsCartOn(true);
   };
   const hideCartHandler = () => {
      setIsCartOn(false);
   };
   return (
      <Router>
         <Routes>
            <Route
               path="/"
               element={
                  <MainComp
                     isCartOn={isCartOn}
                     hideCartHandler={hideCartHandler}
                     showCartHandler={showCartHandler}
                  />
               }
            />
            <Route path="/Admin" element={<AdminLogin />} />
         </Routes>
      </Router>
   );
}

const MainComp = ({ isCartOn, hideCartHandler, showCartHandler }) => {
   return (
      <CartProvider>
         {isCartOn && <Cart onHideCart={hideCartHandler} />}
         <main>
            <Header onShowCart={showCartHandler} />
            <Meals />
         </main>
      </CartProvider>
   );
};

export default App;

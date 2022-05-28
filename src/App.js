import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";

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
            <Route path="/admin/login" element={<AdminLogin />} exact />
            <Route path="admin" element={<AdminPanel />} />
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

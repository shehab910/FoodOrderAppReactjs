import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartOn, setIsCartOn] = useState(false);
  const showCartHandler = () => {
    setIsCartOn(true);
  };
  const hideCartHandler = () => {
    setIsCartOn(false);
  };
  return (
    <>
      { isCartOn && <Cart onHideCart={hideCartHandler} /> }
      <main>
        <Header onShowCart={showCartHandler}/>
        <Meals />
      </main>
    </>
  );
}

export default App;

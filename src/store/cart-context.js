import { createContext } from "react";

const CartContext = createContext({
   //* default data will not be used but will give auto-completion
   items: [],
   totalAmount: 0,
   addItem: () => {},
   removeItem: () => {},
});

export default CartContext;

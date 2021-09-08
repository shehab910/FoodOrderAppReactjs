import React from "react";

const CartContext = React.createContext({
    //* default data will not be used but will give auto-completion
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () =>{},
});

export default CartContext;
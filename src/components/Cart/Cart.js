import { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const [isOrdered, setIsOrdered] = useState(false);
	const cartCtx = useContext(CartContext);

	useEffect(() => {
		if (isOrdered && !props.isCartOn) setIsOrdered(false);
	}, [isOrdered, props.isCartOn]);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.items.length > 0;

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItems = cartCtx.items.map((item) => (
		<CartItem
			key={item.id}
			name={item.name}
			amount={item.amount}
			price={item.price}
			onAdd={cartItemAddHandler.bind(null, item)}
			onRemove={cartItemRemoveHandler.bind(null, item.id)}
		/>
	));

	const orderHandler = () => {
		setIsOrdered(true);
		cartCtx.clearCart();
	};

	const cartActions = (
		<div className={styles.actions}>
			<button onClick={props.onHideCart} className={styles["button--alt"]}>
				Close
			</button>
			{hasItems && (
				<button onClick={orderHandler} className={styles.button}>
					Order
				</button>
			)}
		</div>
	);

	return (
		<Modal open={props.isCartOn} onClose={props.onHideCart}>
			{isOrdered && <h3>Your order is being proccessed!</h3>}
			{!isOrdered && (
				<>
					<ul className={styles["cart-items"]}>{cartItems}</ul>
					<div className={styles.total}>
						<span>Total Amount: </span>
						<span>{totalAmount}</span>
					</div>
				</>
			)}
			{cartActions}
		</Modal>
	);
};

export default Cart;

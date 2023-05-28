import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Login from "./pages/Login";
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
				<Route path="/login" element={<Login />} exact />
				<Route path="admin" element={<AdminPanel />} />
			</Routes>
		</Router>
	);
}

const MainComp = ({ isCartOn, hideCartHandler, showCartHandler }) => {
	return (
		<CartProvider>
			<Cart isCartOn={isCartOn} onHideCart={hideCartHandler} />
			<main>
				<Header onShowCart={showCartHandler} />
				<Meals />
			</main>
		</CartProvider>
	);
};

export default App;

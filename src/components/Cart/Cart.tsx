import React from "react";
import S from "./Cart.module.scss";

const Cart: React.FC = () => {
	return (
		<div className={S.cart}>
			<p className={S.text}>Cart</p>
			<span className={S.number}>0</span>
		</div>
	);
};

export default Cart;

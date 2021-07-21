import React from "react";
import S from "./Cart.module.scss";

const Cart = React.forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<div className={`${S.cart} split-text`}>
			<div ref={ref} className={S.cartDiv}>
				<p className={S.text}>Cart</p>
				<span className={S.number}>0</span>
			</div>
		</div>
	);
});

export default Cart;

import React from "react";
import S from "./Button.module.scss";
import { ReactComponent as Arrow } from "../../svgs/arrow.svg";

type ButtonProps = {
	text?: boolean;
	onClick?: () => void;
	color: "red" | "greige";
};

const Button: React.FC<ButtonProps> = ({ text, color, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`${S[text ? "large" : ""]} ${S.button}`}
		>
			{text ? (
				<p className={S.text}>Buy</p>
			) : (
				<Arrow
					width="10vh"
					className={S.arrow}
					stroke={color === "greige" ? "#000000" : "#ffffff"}
				/>
			)}
			<div className={`${S[color]} ${S.background}`} />
		</button>
	);
};

export default Button;

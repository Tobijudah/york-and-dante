import React from "react";
import S from "./Button.module.scss";
import { ReactComponent as Arrow } from "../../svgs/arrow.svg";

type ButtonProps = {
	text?: boolean;
	color: "red" | "greige";
};

const Button: React.FC<ButtonProps> = ({ text, color }) => {
	return (
		<button className={`${S[text ? "large" : ""]} ${S.button}`}>
			{text ? (
				<p className={S.text}>Buy</p>
			) : (
				<Arrow className={S.arrow} width='10vh' stroke={color === "greige" ? "#000000" : "#ffffff"} />
			)}
			<div className={`${S[color]} ${S.background}`} />
		</button>
	);
};

export default Button;

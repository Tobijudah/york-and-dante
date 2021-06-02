import React from "react";
import S from "./Button.module.scss";
import { ReactComponent as Arrow } from "../../svgs/arrow.svg";

type ButtonProps = {
	text?: boolean;
	color: "red" | "greige";
};

const Button: React.FC<ButtonProps> = ({ text, color }) => {
	return (
		<button className={`${S[color]} ${S[text ? "large" : ""]}`}>
			{text ? (
				<p className={S.text}>Buy</p>
			) : (
				<Arrow className={S.arrow} width='10vh' stroke={color === "greige" ? "#000000" : "#ffffff"} />
			)}
		</button>
	);
};

export default Button;

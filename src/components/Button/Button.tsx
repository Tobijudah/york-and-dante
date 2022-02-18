import React from "react";
import S from "./Button.module.scss";
import { ReactComponent as Arrow } from "../../svgs/arrow.svg";

type ButtonProps = {
	text?: string;
	onClick?: () => void;
	use: "section-one" | "section-nine" | "credits";
};

const Button: React.FC<ButtonProps> = ({ use, text, onClick }) => {
	return (
		<div className={`${S[use]} ${S.buttonContainer}`}>
			<button aria-label={text} onClick={onClick} className={S.button}>
				<Arrow width="10vh" className={S.arrow} />
				<div className={S.background} />
			</button>
			<p className={S.text}>{text}</p>
		</div>
	);
};

export default Button;

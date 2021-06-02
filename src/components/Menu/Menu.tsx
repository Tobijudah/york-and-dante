import React from "react";
import S from "./Menu.module.scss";
import { ReactComponent as Close } from "../../svgs/close.svg";
import { ReactComponent as Icon } from "../../svgs/button-arrow.svg";

type MenuProps = {
	open: boolean;
  onClick: () => void;
};

const Menu: React.FC<MenuProps> = ({ open, onClick }) => {
	return (
		<div className={`${S.menu} ${S[open ? "open" : "closed"]}`}>
			<div className={S.close} onClick={onClick}>
				<Close width="5vh" height="5vh" />
			</div>
			<p className={S.menuItem}>
				Our story <Icon className={S.icon} />
			</p>
			<p className={S.menuItem}>
				The credenza <Icon className={S.icon} />
			</p>
			<p className={S.menuItem}>
				Contact us <Icon className={S.icon} />
			</p>
		</div>
	);
};

export default Menu;

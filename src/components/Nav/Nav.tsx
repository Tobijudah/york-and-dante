import React from "react";
import S from "./Nav.module.scss";

const Nav: React.FC = () => {
	return (
		<nav className={S.nav}>
			<div className={S.upper}>
				<p>Me</p>
				<p>Nu</p>
			</div>
			<div className={S.lower}>
				<p className={S.lowerText}>
					Barn <span className={S.and}>&</span> Bed
				</p>
			</div>
			<div className={S.div} />
		</nav>
	);
};

export default Nav;

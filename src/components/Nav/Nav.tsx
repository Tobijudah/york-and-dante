import React from "react";
import S from "./Nav.module.scss";

type NavProps = {
	onClick: () => void;
};

const Nav = React.forwardRef<HTMLElement, NavProps>(({ onClick }, ref) => {
	return (
		<nav ref={ref} className={`${S.nav} hidden-init`}>
			<div className={S.upper} onClick={onClick}>
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
});

export default Nav;

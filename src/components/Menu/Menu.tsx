import gsap from "gsap";
import S from "./Menu.module.scss";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Close } from "../../svgs/close.svg";
import { ReactComponent as Icon } from "../../svgs/button-arrow.svg";

type MenuProps = {
	open: boolean;
	onClick: () => void;
};

const Menu: React.FC<MenuProps> = ({ open, onClick }) => {
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (open) {
			const close = gsap.timeline();
			close
				.to("#closeSVG > circle", {
					ease: "power1.in",
					strokeDashoffset: 400,
				})
				.to(
					"#closeSVG",
					{
						ease: "power1.in",
						strokeDashoffset: 130,
					},
					"-=0.5"
				)
				.to(
					menuRef.current,
					{
						ease: "power2.in",
						clipPath: "inset(0% 0% 100% 0%)",
					},
					"-=0.4"
				)
				.set("#closeSVG > circle", { strokeDashoffset: -400 });
		} else {
			const open = gsap.timeline();
			open.to(menuRef.current, {
				duration: 1,
				ease: "power2.out",
				clipPath: "inset(0% 0% 0% 0%)",
			})
				.to(
					"#closeSVG > circle",
					{
						duration: 0.75,
						ease: "power1.out",
						strokeDashoffset: 0,
					},
					"-=0.75"
				)
				.to(
					"#closeSVG",
					{
						duration: 0.75,
						ease: "power1.out",
						strokeDashoffset: 0,
					},
					"-=0.4"
				);
		}
	}, [open]);

	return (
		<div ref={menuRef} className={S.menu}>
			<Close id="closeSVG" onClick={onClick} className={S.close} />
			<p data-splitting="" className={S.menuItem}>
				Our story <Icon className={S.icon} />
			</p>
			<p data-splitting="" className={S.menuItem}>
				The credenza <Icon className={S.icon} />
			</p>
			<p data-splitting="" className={S.menuItem}>
				Contact us <Icon className={S.icon} />
			</p>
		</div>
	);
};

export default Menu;

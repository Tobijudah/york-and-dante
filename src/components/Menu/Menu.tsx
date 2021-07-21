import gsap from "gsap";
import S from "./Menu.module.scss";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Close } from "../../svgs/close.svg";
import { ReactComponent as Icon } from "../../svgs/button-arrow.svg";

type MenuProps = {
	open: boolean;
	preloaded: boolean;
	onClick: () => void;
};

const Menu: React.FC<MenuProps> = ({ open, onClick, preloaded }) => {
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scope = gsap.utils.selector("#menu");
		if (!preloaded) return;
		if (open) {
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
				)
				.fromTo(
					scope(".split-text .word > .char, .whitespace"),
					{
						yPercent: 100,
					},
					{
						yPercent: 0,
						stagger: 0.01,
						ease: "power2.out",
					},
					"-=1"
				);
		} else {
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
					scope(".split-text .word > .char, .whitespace"),
					{
						yPercent: -100,
						stagger: 0.005,
						ease: "power2.in",
					},
					"-=0.5"
				)
				.to(
					menuRef.current,
					{
						ease: "power2.in",
						clipPath: "inset(0% 0% 100% 0%)",
					},
					"-=0.5"
				)
				.set("#closeSVG > circle", { strokeDashoffset: -400 });
		}
	}, [open]);

	return (
		<div id="menu" ref={menuRef} className={S.menu}>
			<Close id="closeSVG" onClick={onClick} className={S.close} />
			<p
				data-splitting=""
				className={`${S.menuItem} split-text menuItem`}
			>
				Our story <Icon className={S.icon} />
			</p>
			<p
				data-splitting=""
				className={`${S.menuItem} split-text menuItem`}
			>
				The credenza <Icon className={S.icon} />
			</p>
			<p
				data-splitting=""
				className={`${S.menuItem} split-text menuItem`}
			>
				Contact us <Icon className={S.icon} />
			</p>
		</div>
	);
};

export default Menu;

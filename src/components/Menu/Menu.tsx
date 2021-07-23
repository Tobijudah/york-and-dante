import gsap from "gsap";
import S from "./Menu.module.scss";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Close } from "../../svgs/close.svg";
import { ReactComponent as Icon } from "../../svgs/button-arrow.svg";

type MenuProps = {
	scroll: any;
	open: boolean;
	preloaded: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<MenuProps> = ({ open, scroll, setOpen, preloaded }) => {
	const menuRef = useRef<HTMLDivElement>(null);
	const feDisplacementMapRef = useRef<SVGFEDisplacementMapElement>(null);

	useEffect(() => {
		const scope = gsap.utils.selector("#menu");
		if (!preloaded) {
			[...document.getElementsByClassName("menuItem")].forEach((el) => {
				el.addEventListener("mouseenter", () => mouseEnter(el));
			});
			return;
		}
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

	const scrollTo = (target: string): void => {
		scroll.scrollTo(document.querySelector(target), {
			offset: (window.innerWidth / 100) * -6,
		});
		setOpen(false);
	};

	const mouseEnter = (el: Element) => {
		const scale = { scale: 300 };
		const hoverStart = gsap.timeline();
		hoverStart.eventCallback("onUpdate", () => {
			if (feDisplacementMapRef && feDisplacementMapRef.current) {
				feDisplacementMapRef.current.scale.baseVal = scale.scale;
			}
		});
		hoverStart
			.to(scale, {
				duration: 0,
				startAt: { scale: 0 },
				scale: 300,
			})
			.to(scale, {
				duration: 0.6,
				ease: "power2.out",
				scale: 0,
			})
			.to(
				el,
				{
					color: "black",
					ease: "power2.out",
				},
				"-=0.6"
			)
			.to(
				el.children[3],
				{
					duration: 0.75,
					opacity: 1,
					ease: "power2.out",
				},
				"-=0.6"
			);
	};

	return (
		<div id="menu" ref={menuRef} className={S.menu}>
			<svg className="hidden">
				<defs>
					<filter id="filter-3">
						<feTurbulence
							result="warp"
							numOctaves="6"
							type="fractalNoise"
							baseFrequency="0.2 0.025"
						/>
						<feDisplacementMap
							scale="0"
							in2="warp"
							in="SourceGraphic"
							xChannelSelector="R"
							yChannelSelector="G"
							ref={feDisplacementMapRef}
						/>
					</filter>
				</defs>
			</svg>
			<Close
				id="closeSVG"
				className={S.close}
				onClick={() => setOpen(false)}
			/>
			<p
				data-splitting=""
				onClick={() => scrollTo("#section-two")}
				className={`${S.menuItem} split-text menuItem`}
			>
				Our story <Icon className={S.icon} />
			</p>
			<p
				data-splitting=""
				onClick={() => scrollTo("#section-five")}
				className={`${S.menuItem} split-text menuItem`}
			>
				The credenza <Icon className={S.icon} />
			</p>
			<p
				data-splitting=""
				onClick={() => scrollTo("#section-eight")}
				className={`${S.menuItem} split-text menuItem`}
			>
				Contact us <Icon className={S.icon} />
			</p>
		</div>
	);
};

export default Menu;

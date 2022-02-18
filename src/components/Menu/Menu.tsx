import gsap from "gsap";
import S from "./Menu.module.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import useStateRef from "../../hooks/useStateRef";
import useRefArray from "../../hooks/useRefArray";
import { ReactComponent as Close } from "../../svgs/close.svg";
import { ReactComponent as Icon } from "../../svgs/button-arrow.svg";

type MenuProps = {
	open: boolean;
	preloaded: boolean;
	windowWidth: number;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<MenuProps> = ({
	open,
	setOpen,
	preloaded,
	windowWidth,
}) => {
	const menuRef = useRef<HTMLDivElement>(null);
	const feDisplacementMapRefs = useRefArray<SVGFEDisplacementMapElement>(3);
	const { ref: enterTimeline, setStateRef: setEnterTimeline } =
		useStateRef<null | gsap.core.Timeline>(null);

	useEffect(() => {
		const scope = gsap.utils.selector("#menu");
		if (!preloaded && feDisplacementMapRefs.length !== 0) {
			[...document.getElementsByClassName("menuItem")].forEach((el) => {
				const id = parseInt(el.getAttribute("data-filter") as string);
				gsap.set(el.children[el.children.length - 1], {
					filter: `url("#filter-${id}")`,
				});
				el.addEventListener("mouseenter", () => {
					const tl = mouseEnter(el, id);
					setEnterTimeline(tl);
				});
				el.addEventListener("mouseleave", () => {
					if (enterTimeline) {
						enterTimeline.current?.progress(1).kill();
					}
					mouseLeave(el, id);
				});
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
					scope(
						".split-text .word > .char, .whitespace, .split-text > svg"
					),
					{
						yPercent: 110,
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
					scope(
						".split-text .word > .char, .whitespace, .split-text > svg"
					),
					{
						yPercent: -110,
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
	}, [open, feDisplacementMapRefs]);

	const mouseEnter = (el: Element, id: number) => {
		const scale = { scale: 300 };
		const hoverStart = gsap.timeline({
			onUpdate: () => {
				if (
					feDisplacementMapRefs[id] &&
					feDisplacementMapRefs[id].current
				) {
					feDisplacementMapRefs[id].current.scale.baseVal =
						scale.scale;
				}
			},
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
					duration: 0.6,
					color: "black",
					ease: "power2.out",
				},
				0
			)
			.to(
				el.children[el.children.length - 1],
				{
					duration: 0.75,
					opacity: 1,
					ease: "power2.out",
				},
				0
			);
		return hoverStart;
	};

	const mouseLeave = (el: Element, id: number) => {
		const scale = { scale: 0 };
		const hoverEnd = gsap.timeline({
			onUpdate: () => {
				if (
					feDisplacementMapRefs[id] &&
					feDisplacementMapRefs[id].current
				) {
					feDisplacementMapRefs[id].current.scale.baseVal =
						scale.scale;
				}
			},
		});
		hoverEnd
			.to(scale, {
				duration: 0,
				startAt: { scale: 300 },
				scale: 0,
			})
			.to(scale, {
				duration: 0.45,
				ease: "power2.in",
				scale: 300,
			})
			.to(
				el,
				{
					duration: 0.35,
					color: "transparent",
					ease: "power2.in",
				},
				0
			)
			.to(
				el.children[el.children.length - 1],
				{
					duration: 0.35,
					opacity: 0,
					ease: "power2.in",
				},
				0
			);
	};

	const onClick = (): void => {
		setTimeout(
			() => {
				setOpen(false);
			},
			windowWidth > 1024 ? 0 : 500
		);
	};

	return (
		<div id="menu" ref={menuRef} className={S.menu}>
			<svg className="hidden">
				<defs>
					<filter id="filter-0">
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
							ref={feDisplacementMapRefs[0]}
						/>
					</filter>
					<filter id="filter-1">
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
							ref={feDisplacementMapRefs[1]}
						/>
					</filter>
					<filter id="filter-2">
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
							ref={feDisplacementMapRefs[2]}
						/>
					</filter>
				</defs>
			</svg>
			<Close
				id="closeSVG"
				className={S.close}
				onClick={() => setOpen(false)}
			/>
			<Link to="/">
				<p
					data-filter="0"
					data-splitting=""
					onClick={onClick}
					className={`${S.menuItem} split-text menuItem`}
				>
					Home <Icon className={S.icon} />
				</p>
			</Link>
			<Link to="/gallery">
				<p
					data-filter="1"
					data-splitting=""
					onClick={onClick}
					className={`${S.menuItem} split-text menuItem`}
				>
					Gallery <Icon className={S.icon} />
				</p>
			</Link>
			<Link to="/credits">
				<p
					data-filter="2"
					data-splitting=""
					onClick={onClick}
					className={`${S.menuItem} split-text menuItem`}
				>
					Credits <Icon className={S.icon} />
				</p>
			</Link>
		</div>
	);
};

export default Menu;

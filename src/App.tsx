import S from "./App.module.scss";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";
import IntroAnimation from "./animations/intro";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionSix from "./components/SectionSix/SectionSix";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionSeven from "./components/SectionSeven/SectionSeven";
import SectionEight from "./components/SectionEight/SectionEight";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function App() {
	const navRef = useRef(null);
	const cartRef = useRef(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState<boolean>(false);
	const [preloaded, setPreloaded] = useState<boolean>(false);

	useEffect(() => {
		if (preloaded) {
			const scroll = new LocomotiveScroll({
				smooth: true,
				el: scrollRef.current,
				direction: "horizontal",
				gestureDirection: "both",
				tablet: {
					smooth: true,
				},
				smartphone: {
					smooth: true,
				},
			});
			scroll.stop();
			setTimeout(() => {
				scroll.start();
				IntroAnimation([navRef.current, cartRef.current]);
			}, 10000);
			// 10000: time for section-1 animation to start
			gsap.registerPlugin(ScrollTrigger);
			scroll.on("scroll", ScrollTrigger.update);
			ScrollTrigger.scrollerProxy(scrollRef.current, {
				scrollTop(value) {
					if (scroll) {
						return arguments.length
							? scroll.scrollTo(value, 0, 0)
							: scroll.scroll.instance.scroll.y;
					}
				},
				scrollLeft(value) {
					if (scroll) {
						return arguments.length
							? scroll.scrollTo(value, 0, 0)
							: scroll.scroll.instance.scroll.x;
					}
				},
				getBoundingClientRect() {
					return {
						top: 0,
						left: 0,
						width: window.innerWidth,
						height: window.innerHeight,
					};
				},
				pinType: scrollRef.current?.style.transform
					? "transform"
					: "fixed",
			});

			const lsUpdate = () => {
				if (scroll) {
					scroll.update();
				}
			};

			ScrollTrigger.addEventListener("refresh", lsUpdate);
			ScrollTrigger.refresh();
		} else Splitting();
	}, [preloaded]);

	return (
		<>
			{!preloaded && <Preloader setPreloaded={setPreloaded} />}
			<Cart ref={cartRef} />
			<Nav ref={navRef} onClick={() => setOpen(!open)} />
			<Menu open={open} onClick={() => setOpen(!open)} />
			<div
				ref={scrollRef}
				id="scroll"
				className={S.app}
				data-scroll-container
			>
				<SectionOne preloaded={preloaded} />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
				<SectionFive />
				<SectionSix />
				<SectionSeven />
				<SectionEight />
			</div>
		</>
	);
}

export default App;

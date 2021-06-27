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

function App() {
	const navRef = useRef(null);
	const cartRef = useRef(null);
	const scrollRef = useRef(null);
	const [scroll, setScroll] = useState<any>();
	const [open, setOpen] = useState<boolean>(false);
	const [preloaded, setPreloaded] = useState<boolean>(false);

	useEffect(() => {
		if (preloaded) {
			setScroll(
				new LocomotiveScroll({
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
					reloadOnContextChange: true,
				})
			);
			scroll?.stop();
			setTimeout(() => {
				scroll?.start();
				IntroAnimation([navRef.current, cartRef.current]);
			}, 10000);
			// 10000: time for section-1 animation to start
		} else Splitting();
	}, [preloaded]);

	return (
		<>
			{!preloaded && <Preloader setPreloaded={setPreloaded} />}
			<Cart ref={cartRef} />
			<Nav ref={navRef} onClick={() => setOpen(!open)} />
			<Menu open={open} onClick={() => setOpen(!open)} />
			<div ref={scrollRef} className={S.app} data-scroll-container>
				<SectionOne preloaded={preloaded} />
				<SectionTwo />
				<SectionThree scroll={scroll} />
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

import S from "./App.module.scss";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";
import IntroAnimation from "./animations/intro";
import initSmoothScroll from "./utils/initSmoothScroll";
import Preloader from "./components/Preloader/Preloader";
import React, { useEffect, useRef, useState } from "react";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionSix from "./components/SectionSix/SectionSix";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionSeven from "./components/SectionSeven/SectionSeven";
import SectionEight from "./components/SectionEight/SectionEight";
import initSmoothHorizontalScroll from "./utils/initSmoothHorizontalScroll";

function App() {
	const navRef = useRef(null);
	const cartRef = useRef(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState<boolean>(false);
	const [preloaded, setPreloaded] = useState<boolean>(false);

	useEffect(() => {
		if (preloaded) {
			if (window.innerWidth > 600) initSmoothHorizontalScroll();
			else scrollRef.current && initSmoothScroll(scrollRef.current, undefined, 0.3);
			setTimeout(() => {
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
			<div>
				<div
					ref={scrollRef}
					id="scroll-container"
					className={`wrapper ${S.app}`}
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
			</div>
		</>
	);
}

export default App;

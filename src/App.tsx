import gsap from "gsap";
import S from "./App.module.scss";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import IntroAnimation from "./animations/intro";
import LocomotiveScroll from "locomotive-scroll";
import Credits from "./components/Credits/Credits";
import React, { useEffect, useRef, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionSix from "./components/SectionSix/SectionSix";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionSeven from "./components/SectionSeven/SectionSeven";
import SectionNine from "./components/SectionNine/SectionNine";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

function App() {
	const navRef = useRef(null);
	const scrollRef = useRef(null);
	const [scroll, setScroll] = useState<any>();
	const [open, setOpen] = useState<boolean>(false);
	const [preloaded, setPreloaded] = useState<boolean>(false);

	useEffect(() => {
		if (preloaded && !scroll) {
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
		} else if (preloaded && scroll) {
			scroll.stop();
			setTimeout(
				() => {
					scroll.start();
					window.innerWidth > 1024 && IntroAnimation(navRef.current);
				},
				window.innerWidth < 1024 ? 0 : 1000
			);
		} else {
			Splitting();
			window.innerWidth > 1024 &&
				gsap.set(navRef.current, { visibility: "hidden" });
		}
	}, [scroll, preloaded]);

	return (
		<>
			{!preloaded && <Preloader setPreloaded={setPreloaded} />}
			<Nav ref={navRef} onClick={() => setOpen(!open)} />
			<Menu
				open={open}
				scroll={scroll}
				setOpen={setOpen}
				preloaded={preloaded}
			/>
			<div ref={scrollRef} className={S.app} data-scroll-container>
				<SectionOne scroll={scroll} preloaded={preloaded} />
				<SectionTwo />
				<SectionThree scroll={scroll} />
				<SectionFour />
				<SectionFive />
				<SectionSix />
				<SectionSeven />
				<SectionNine />
				<Credits scroll={scroll} />
			</div>
		</>
	);
}

export default App;

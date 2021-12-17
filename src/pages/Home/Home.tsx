import gsap from "gsap";
import Splitting from "splitting";
import { PageProps } from "../page.types";
import Nav from "../../components/Nav/Nav";
import LocomotiveScroll from "locomotive-scroll";
import IntroAnimation from "../../animations/intro";
import Credits from "../../components/Credits/Credits";
import React, { useEffect, useRef, useState } from "react";
import SectionOne from "../../components/SectionOne/SectionOne";
import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionSix from "../../components/SectionSix/SectionSix";
import SectionFour from "../../components/SectionFour/SectionFour";
import SectionFive from "../../components/SectionFive/SectionFive";
import SectionNine from "../../components/SectionNine/SectionNine";
import SectionThree from "../../components/SectionThree/SectionThree";
import SectionSeven from "../../components/SectionSeven/SectionSeven";
import SectionEight from "../../components/SectionEight/SectionEight";

const Home: React.FC<PageProps> = ({ navOnClick, preloaded }) => {
	const navRef = useRef(null);
	const scrollRef = useRef(null);
	const [scroll, setScroll] = useState<any>();

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
			scroll.update();
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
			<Nav ref={navRef} onClick={navOnClick} />
			<div ref={scrollRef} data-scroll-container>
				<SectionOne scroll={scroll} preloaded={preloaded} />
				<SectionTwo />
				<SectionThree scroll={scroll} />
				<SectionFour />
				<SectionFive />
				<SectionSix />
				<SectionEight />
				<SectionSeven />
				<SectionNine />
				<Credits scroll={scroll} />
			</div>
		</>
	);
};

export default Home;

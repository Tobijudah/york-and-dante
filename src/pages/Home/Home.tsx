import gsap from "gsap";
import imagesLoaded from "imagesloaded";
import { PageProps } from "../page.types";
import Nav from "../../components/Nav/Nav";
import LocomotiveScroll from "locomotive-scroll";
import IntroAnimation from "../../animations/intro";
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

const Home: React.FC<PageProps> = ({
	appLoaded,
	preloaded,
	navOnClick,
	windowWidth,
	setAppLoaded,
}) => {
	const navRef = useRef(null);
	const scrollRef = useRef(null);
	const [scroll, setScroll] = useState<any>();

	const preloadImages = () => {
		return new Promise((resolve) => {
			imagesLoaded(
				document.querySelectorAll("#home img"),
				{ background: true },
				resolve
			);
		});
	};

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
			Promise.all([preloadImages()]).then(() => {
				scroll.update();
			});
			scroll.stop();
			scroll.update();
			const loadedAnimationDelay = windowWidth <= 1024 ? 0.8 : 0.5;
			setTimeout(
				() => {
					scroll.start();
					!appLoaded &&
						windowWidth > 1024 &&
						IntroAnimation(navRef.current);
					setAppLoaded(true);
				},
				!appLoaded ? 0 : loadedAnimationDelay
			);
		}
		return () => scroll && scroll.destroy();
	}, [scroll, preloaded]);

	useEffect(() => {
		!appLoaded &&
			navRef.current &&
			windowWidth > 1024 &&
			gsap.set(navRef.current, { visibility: "hidden" });
	}, [navRef.current]);

	return (
		<>
			<Nav ref={navRef} onClick={navOnClick} />
			<div id="home" ref={scrollRef} data-scroll-container>
				<SectionOne
					scroll={scroll}
					appLoaded={appLoaded}
					preloaded={preloaded}
					windowWidth={windowWidth}
				/>
				<SectionTwo />
				<SectionThree scroll={scroll} />
				<SectionFour />
				<SectionFive windowWidth={windowWidth} />
				<SectionSix />
				<SectionEight windowWidth={windowWidth} />
				<SectionSeven windowWidth={windowWidth} />
				<SectionNine windowWidth={windowWidth} />
			</div>
		</>
	);
};

export default Home;

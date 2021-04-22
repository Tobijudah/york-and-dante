import S from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionThree from "./components/SectionThree/SectionThree";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";
import SectionSix from "./components/SectionSix/SectionSix";

function App() {
	const scrollRef = useRef(null);

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			smooth: true,
			el: scrollRef.current,
			direction: "horizontal",
		});
	});

	return (
		<>
			<Nav />
			<Cart />
			<div ref={scrollRef} className={S.app} data-scroll-container>
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
				<SectionFive />
				<SectionSix />
			</div>
		</>
	);
}

export default App;

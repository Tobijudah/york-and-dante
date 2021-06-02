import S from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef, useState } from "react";
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
	const scrollRef = useRef(null);

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			smooth: true,
			el: scrollRef.current,
			direction: "horizontal",
			tablet: {
				smooth: true,
			},
			smartphone: {
				smooth: true,
			},
		});
	});

	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<Nav onClick={() => setOpen(!open)} />
			<Cart />
			<Menu open={open} onClick={() => setOpen(!open)} />
			<div ref={scrollRef} className={S.app} data-scroll-container>
				<SectionOne />
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

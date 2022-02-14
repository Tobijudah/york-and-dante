import gsap from "gsap";
import S from "./App.module.scss";
import Home from "./pages/Home/Home";
import "splitting/dist/splitting.css";
import { Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Gallery from "./pages/Gallery/Gallery";
import Banner from "./components/Banner/Banner";
import useWindowWidth from "./hooks/useWindowWidth";
import { CSSTransition } from "react-transition-group";
import Preloader from "./components/Preloader/Preloader";
import React, { useEffect, useRef, useState } from "react";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

function App() {
	const ref = useRef(null);
	const windowWidth = useWindowWidth();
	const [open, setOpen] = useState<boolean>(false);
	const [preloaded, setPreloaded] = useState<boolean>(false);
	const [appLoaded, setAppLoaded] = useState<boolean>(false);

	const routes = [
		{ path: "/", name: "Home", Component: Home },
		{ path: "/gallery", name: "Gallery", Component: Gallery },
	];

	const onEnter = () => {
		gsap.to("#banner", {
			delay: 2.5,
			yPercent: -100,
			ease: "power2.in",
		});
		gsap.set("#banner", {
			yPercent: 100,
		});
	};

	const onExit = () => {
		gsap.to("#banner", {
			yPercent: 0,
			delay: 0.15,
			duration: 0.6,
			ease: "power2.out",
		});
	};

	useEffect(() => {
		gsap.set("#banner", {
			yPercent: 100,
		});
	}, []);

	return (
		<main className={S.app}>
			{!preloaded && <Preloader setPreloaded={setPreloaded} />}
			<Menu open={open} setOpen={setOpen} preloaded={preloaded} />
			<Banner />
			{routes.map(({ name, path, Component }) => (
				<Route key={path} exact path={path}>
					{({ match }) => (
						<CSSTransition
							nodeRef={ref}
							unmountOnExit
							timeout={1000}
							onExit={onExit}
							in={match != null}
							onEntering={onEnter}
						>
							<div className={S.page} data-name={name}>
								<Component
									appLoaded={appLoaded}
									preloaded={preloaded}
									windowWidth={windowWidth}
									setAppLoaded={setAppLoaded}
									navOnClick={() => setOpen(!open)}
								/>
							</div>
						</CSSTransition>
					)}
				</Route>
			))}
		</main>
	);
}

export default App;

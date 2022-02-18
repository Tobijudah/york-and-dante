import gsap from "gsap";
import S from "./App.module.scss";
import splitting from "splitting";
import Home from "./pages/Home/Home";
import "splitting/dist/splitting.css";
import { Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Credits from "./pages/Credits/Credits";
import Gallery from "./pages/Gallery/Gallery";
import Banner from "./components/Banner/Banner";
import React, { useEffect, useState } from "react";
import useWindowWidth from "./hooks/useWindowWidth";
import { CSSTransition } from "react-transition-group";
import Preloader from "./components/Preloader/Preloader";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

function App() {
	const windowWidth = useWindowWidth();
	const banner = gsap.utils.selector("#banner");
	const [open, setOpen] = useState<boolean>(false);
	const [preloaded, setPreloaded] = useState<boolean>(false);
	const [appLoaded, setAppLoaded] = useState<boolean>(false);

	const routes = [
		{ path: "/", name: "Home", Component: Home },
		{ path: "/gallery", name: "Gallery", Component: Gallery },
		{ path: "/credits", name: "Credits", Component: Credits },
	];

	const onEnter = () => {
		const enter = gsap.timeline();
		enter
			.to("#banner", {
				delay: 2.5,
				yPercent: -100,
				ease: "power2.in",
			})
			.to(
				banner(".split-text .word, .whitespace"),
				{
					delay: 2.25,
					duration: 1,
					opacity: 0,
					yPercent: -150,
					stagger: 0.015,
					ease: "power2.out",
				},
				0
			)
			.eventCallback("onComplete", () => {
				gsap.set("#banner", {
					yPercent: 100,
				});
				gsap.set(banner(".split-text .word, .whitespace"), {
					opacity: 1,
					yPercent: 0,
				});
				enter.kill();
			});
	};

	const onExit = () => {
		const exit = gsap.timeline();
		gsap.set(banner(".hidden-init"), { visibility: "visible" });
		exit.to("#banner", {
			yPercent: 0,
			delay: windowWidth <= 1024 && open ? 0.55 : 0.15,
			duration: 0.6,
			ease: "power2.out",
		})
			.from(
				banner(".split-text .word, .whitespace"),
				{
					duration: 1.25,
					opacity: 0,
					yPercent: 150,
					stagger: 0.035,
					ease: "power2.out",
				},
				0.6
			)
			.eventCallback("onComplete", () => {
				exit.kill();
			});
	};

	useEffect(() => {
		splitting({ by: "words", target: "#banner > p" });
	}, [preloaded]);

	return (
		<main className={S.app}>
			{!preloaded && (
				<Preloader
					windowWidth={windowWidth}
					setPreloaded={setPreloaded}
				/>
			)}
			<Menu
				open={open}
				setOpen={setOpen}
				preloaded={preloaded}
				windowWidth={windowWidth}
			/>
			<Banner />
			{routes.map(({ name, path, Component }) => (
				<Route key={path} exact path={path}>
					{({ match }) => (
						<CSSTransition
							unmountOnExit
							timeout={2500}
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

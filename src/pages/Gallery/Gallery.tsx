import gsap from "gsap";
import S from "./Gallery.module.scss";
import imagesLoaded from "imagesloaded";
import { PageProps } from "../page.types";
import Nav from "../../components/Nav/Nav";
import { GalleryData } from "./GalleryData";
import LocomotiveScroll from "locomotive-scroll";
import IntroAnimation from "../../animations/intro";
import React, { useEffect, useRef, useState } from "react";

const Gallery: React.FC<PageProps> = ({
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
				document.querySelectorAll(".gallery-image"),
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
			const loadedAnimationDelay = window.innerWidth < 1024 ? 0.8 : 0.5;
			setTimeout(
				() => {
					scroll.start();
					!appLoaded &&
						window.innerWidth > 1024 &&
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
			window.innerWidth > 1024 &&
			gsap.set(navRef.current, { visibility: "hidden" });
	}, []);

	useEffect(() => {
		if (preloaded && scroll) {
			gsap.set("#gallery img", { delay: 0.5, visibility: "visible" });
			gsap.from("#leftColumn > img", {
				delay: windowWidth <= 600 ? 0 : 0.1,
				stagger: 0.05,
				duration: 1.5,
				ease: "expo.out",
				y: -window.innerHeight,
			});
			gsap.from("#middleColumn > img", {
				delay: windowWidth <= 600 ? 0.7 : 0.75,
				stagger: 0.05,
				duration: 1.5,
				ease: "expo.out",
				y: window.innerHeight,
			});
			gsap.from("#rightColumn > img", {
				delay: 0.35,
				stagger: 0.05,
				duration: 1.5,
				ease: "expo.out",
				y: -window.innerHeight,
			});
		}
	}, [preloaded, scroll]);

	const mobileColumn1 = [...GalleryData].splice(0, 16);
	const mobileColumn2 = [...GalleryData].splice(16, 16);
	const desktopColumn1 = [...GalleryData].splice(0, 11);
	const desktopColumn2 = [...GalleryData].splice(11, 11);
	const desktopColumn3 = [...GalleryData].splice(22, 11);

	return (
		<>
			<Nav ref={navRef} onClick={navOnClick} />
			<div id="gallery" className={S.gallery}>
				<h1 className={S.header}>Gallery</h1>
				<div ref={scrollRef} data-scroll data-scroll-container>
					<div className={S.grid}>
						{windowWidth > 600 && (
							<>
								<div
									data-scroll
									id="leftColumn"
									data-scroll-speed={-20}
									className={S.desktopColumn}
								>
									{desktopColumn1.map((image, i) => (
										<img
											key={i}
											src={image.link}
											alt={image.name}
											className={S.image}
										/>
									))}
								</div>
								<div
									id="middleColumn"
									className={S.middleColumn}
								>
									{desktopColumn2.map((image, i) => (
										<img
											key={i}
											src={image.link}
											alt={image.name}
											className={S.image}
										/>
									))}
								</div>
								<div
									data-scroll
									id="rightColumn"
									data-scroll-speed={-20}
									className={S.desktopColumn}
								>
									{desktopColumn3.map((image, i) => (
										<img
											key={i}
											src={image.link}
											alt={image.name}
											className={S.image}
										/>
									))}
								</div>
							</>
						)}
						{windowWidth <= 600 && (
							<>
								<div
									data-scroll
									id="leftColumn"
									data-scroll-speed={-20}
									className={S.leftColumn}
								>
									{mobileColumn1.map((image, i) => (
										<img
											key={i}
											src={image.link}
											alt={image.name}
											className={S.image}
										/>
									))}
								</div>
								<div
									id="middleColumn"
									className={S.rightColumn}
								>
									{mobileColumn2.map((image, i) => (
										<img
											key={i}
											src={image.link}
											alt={image.name}
											className={S.image}
										/>
									))}
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Gallery;

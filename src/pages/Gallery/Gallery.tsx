import gsap from "gsap";
import S from "./Gallery.module.scss";
import imagesLoaded from "imagesloaded";
import { PageProps } from "../page.types";
import Nav from "../../components/Nav/Nav";
import { GalleryData } from "./GalleryData";
import LocomotiveScroll from "locomotive-scroll";
import IntroAnimation from "../../animations/intro";
import useWindowWidth from "../../hooks/useWindowWidth";
import React, { useEffect, useRef, useState } from "react";

const Gallery: React.FC<PageProps> = ({
	appLoaded,
	navOnClick,
	preloaded,
	setAppLoaded,
}) => {
	const navRef = useRef(null);
	const scrollRef = useRef(null);
	const windowWidth = useWindowWidth();
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

	const mobileColumn1 = [...GalleryData].splice(0, 16);
	const mobileColumn2 = [...GalleryData].splice(16, 16);
	const desktopColumn1 = [...GalleryData].splice(0, 11);
	const desktopColumn2 = [...GalleryData].splice(11, 11);
	const desktopColumn3 = [...GalleryData].splice(22, 11);

	return (
		<>
			<Nav ref={navRef} onClick={navOnClick} />
			<div className={S.gallery}>
				<h1 className={S.header}>Gallery</h1>
				<div ref={scrollRef} data-scroll data-scroll-container>
					<div className={S.grid}>
						{windowWidth > 600 && (
							<>
								<div
									className={S.desktopColumn}
									data-scroll
									data-scroll-speed={-20}
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
								<div className={S.middleColumn}>
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
									className={S.desktopColumn}
									data-scroll
									data-scroll-speed={-20}
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
									className={S.leftColumn}
									data-scroll
									data-scroll-speed={-20}
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
								<div className={S.rightColumn}>
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

import gsap from "gsap";
import S from "./Gallery.module.scss";
import imagesLoaded from "imagesloaded";
import { PageProps } from "../page.types";
import Nav from "../../components/Nav/Nav";
import LocomotiveScroll from "locomotive-scroll";
import IntroAnimation from "../../animations/intro";
import React, { useEffect, useRef, useState } from "react";

const Gallery: React.FC<PageProps> = ({
	appLoaded,
	navOnClick,
	preloaded,
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
	return (
		<>
			<Nav ref={navRef} onClick={navOnClick} />
			<div className={S.gallery}>
				<h1 className={S.header}>Gallery</h1>
				<div ref={scrollRef} data-scroll data-scroll-container>
					<div className={S.grid}>
						<div
							className={S.leftColumn}
							data-scroll
							data-scroll-speed={-20}
						>
							{Array.from({ length: 11 }, (_, i) => (
								<img
									key={i}
									className={S.image}
									src={`https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1642240246/it/gallery_column_1/${
										11 - i
									}.png`}
								/>
							))}
						</div>
						<div className={S.middleColumn}>
							{Array.from({ length: 11 }, (_, i) => (
								<img
									key={i}
									className={S.image}
									src={`https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1642240246/it/gallery_column_2/${
										i + 1
									}.png`}
								/>
							))}
						</div>
						<div
							className={S.rightColumn}
							data-scroll
							data-scroll-speed={-20}
						>
							{Array.from({ length: 11 }, (_, i) => (
								<img
									key={i}
									className={S.image}
									src={`https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1642240246/it/gallery_column_3/${
										11 - i
									}.png`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Gallery;

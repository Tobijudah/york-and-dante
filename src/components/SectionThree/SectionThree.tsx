import gsap from "gsap";
import S from "./SectionThree.module.scss";
import image from "../../images/section-3.png";
import React, { useEffect, useRef } from "react";
import locomotiveScrub from "../../animations/utils/locomotive-scrub";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { ReactComponent as RotatingText } from "../../svgs/rotating-text.svg";

type SectionThreeProps = {
	scroll: any;
};

const SectionThree: React.FC<SectionThreeProps> = ({ scroll }) => {
	let progress: number;
	const ref = useRef<HTMLDivElement>(null);
	const SVGRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const isOnScreen = useIntersectionObserver(ref, 0.125);

	useEffect(() => {
		if (isOnScreen && imageRef.current) {
			gsap.to(imageRef.current, {
				scale: 1,
				duration: 4,
				ease: "expo.out",
				clipPath: "inset(0% 0% 0% 0%)",
			});
		}
	}, [isOnScreen, imageRef.current]);

	useEffect(() => {
		if (scroll) {
			const tl = gsap.timeline({ paused: true });
			tl.to(SVGRef.current, {
				duration: 8,
				rotate: 720,
			});
			locomotiveScrub(scroll, "section-three", progress, tl);
		}
	}, [scroll]);

	return (
		<section data-scroll data-scroll-section data-scroll-id="section-three">
			<div className={S.section}>
				<div className={S.textWrapper}>
					<h2 className={S.title}>
						A minmalistic approach to chair design
					</h2>
					<p className={S.text}>
						Barn & Bed  is a chair without any unnecessary details
						or materials: it features a seat in molded polyurethane
						with a simple steel structure. This flexible, stackable
						chair can be used both indoors and outdoors, and has the
						potential to establish a new way of defining furniture
						for public spaces.
					</p>
				</div>
				<div ref={ref} className={S.imageWrapper}>
					<div className={S.imageContainer}>
						<img
							alt=""
							src={image}
							ref={imageRef}
							className={S.image}
						/>
					</div>
					<div ref={SVGRef} className={S.svg}>
						<RotatingText width="100%" height="100%" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionThree;

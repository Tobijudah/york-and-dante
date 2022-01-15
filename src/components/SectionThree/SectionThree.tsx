import gsap from "gsap";
import S from "./SectionThree.module.scss";
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
					<h2 className={S.title}>Made from the heart, for you</h2>
					<p className={S.text}>
						These days, we are all looking for a place where we feel
						good. Fashion should be an accessory to who you are as
						well as a reflection of your personality. It is not just
						what you put on but it is also how you put it on. It’s
						about the details that make all the difference.
					</p>
				</div>
				<div ref={ref} className={S.imageWrapper}>
					<div className={S.imageContainer}>
						<img
							alt=""
							ref={imageRef}
							className={S.image}
							src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1642270471/it/2_sakgkt.png"
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

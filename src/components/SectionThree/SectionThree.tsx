import gsap from "gsap";
import S from "./SectionThree.module.scss";
import image from "../../images/section-3.png";
import React, { useEffect, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { ReactComponent as RotatingText } from "../../svgs/rotating-text.svg";

const SectionThree: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const isOnScreen = useIntersectionObserver(ref, 0.3);

	useEffect(() => {
		if (isOnScreen && imageRef.current) {
			gsap.to(imageRef.current, {
				scale: 1,
				duration: 2,
				ease: "expo.inOut",
				clipPath: "inset(0% 0% 0% 0%)",
			});
		}
	}, [isOnScreen, imageRef.current]);

	return (
		<section data-scroll-section>
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
					<RotatingText
						width="20.24vh"
						height="20.24vh"
						className={S.svg}
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionThree;

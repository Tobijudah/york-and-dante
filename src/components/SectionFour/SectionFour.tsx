import gsap from "gsap";
import S from "./SectionFour.module.scss";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Corner } from "../../svgs/corner.svg";
import { ReactComponent as Line } from "../../svgs/vertical-line.svg";
import { ReactComponent as Scribble } from "../../svgs/scribble.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const SectionFour: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isOnScreen = useIntersectionObserver(ref, 0.25);

	useEffect(() => {
		if (isOnScreen) {
			gsap.to('#SVGRef', {
				delay: 0.5,
				duration: 3,
				ease: "expo.out",
				strokeDashoffset: 0,
			});
		}
	}, [isOnScreen]);
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div className={S.left}>
					<Corner width="5.5vh" height="5.5vh" className={S.corner} />
					<h2 ref={ref} className={S.title}>
						Closer to <span className={S.bronze}>nature</span> than
						you imagine
					</h2>
					<Scribble
						id={'SVGRef'}
						width="43.68vh"
						height="23.59vh"
						className={S.scribble}
					/>
				</div>
				<div className={S.right}>
					<h3 className={S.header}>
						Made of Eco-Friendly materials sewn into the hem of
						every piece
					</h3>
					<Line height="5.67vh" className={S.line} />
					<p className={S.text}>
						Our minimalist Barn & Bed chairs is crafted from
						American poplar and metal tubing with a leather sling.
						The frame is powder-coated steel coated in
						environmentally friendly, lead-free paint. Our frame
						tubes made from bio-based plastic; 82% plant-based and
						18% mineral content. This makes it a sustainable and
						recyclable product, that has been manufactured with care
						for people and the planet.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionFour;

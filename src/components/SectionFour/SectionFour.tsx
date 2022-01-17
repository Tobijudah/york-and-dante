import gsap from "gsap";
import S from "./SectionFour.module.scss";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Corner } from "../../svgs/corner.svg";
import { ReactComponent as Scribble } from "../../svgs/scribble.svg";
import { ReactComponent as Line } from "../../svgs/vertical-line.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const SectionFour: React.FC = () => {
	const ref1 = useRef<HTMLHeadingElement>(null);
	const ref2 = useRef<HTMLHeadingElement>(null);
	const isOnScreen1 = useIntersectionObserver(ref1, 0.25);
	const isOnScreen2 = useIntersectionObserver(ref2, 0.5);

	useEffect(() => {
		if (isOnScreen1) {
			gsap.to("#cornerRef > line", {
				delay: 0.5,
				duration: 1.25,
				ease: "expo.out",
				strokeDashoffset: 0,
			});
			gsap.to("#scribbleRef", {
				delay: 0.5,
				duration: 2.5,
				ease: "power3.out",
				strokeDashoffset: 0,
			});
		}
	}, [isOnScreen1]);

	useEffect(() => {
		if (isOnScreen2) {
			gsap.to("#verticalLineRef > line", {
				delay: 0.5,
				duration: 1.25,
				ease: "expo.out",
				strokeDashoffset: 0,
			});
		}
	}, [isOnScreen2]);

	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div className={S.left}>
					<Corner
						width="5.5vh"
						height="5.5vh"
						id={"cornerRef"}
						className={S.corner}
					/>
					<h2 ref={ref1} className={S.title}>
						Closer to <span className={S.green}>nature</span> than
						you imagine
					</h2>
					<Scribble
						width="43.68vh"
						height="23.59vh"
						id={"scribbleRef"}
						className={S.scribble}
					/>
				</div>
				<div className={S.right}>
					<h3 ref={ref2} className={S.header}>
						Made of Eco-Friendly materials sewn into the hem of
						every piece
					</h3>
					<Line
						height="5.67vh"
						className={S.line}
						id={"verticalLineRef"}
					/>
					<p className={S.text}>
						Internally, the flannel fabric is created from recycled
						bottles and organic hemp. Its outer shell is made from
						regenerated cotton fibers that are softer than cotton
						and sturdier than canvas. This allows our clothing to
						avoid the harsh chemicals that would normally be used to
						whiten. We like to think of it as taking the best of
						everything nature has to offer, maximizing its positive
						attributes while minimizing its negative
						characteristics.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionFour;

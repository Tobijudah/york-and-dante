import gsap from "gsap";
import Marquee from "react-fast-marquee";
import S from "./SectionFive.module.scss";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Line } from "../../svgs/line.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type SectionFiveProps = {
	windowWidth: number;
};

const SectionFive: React.FC<SectionFiveProps> = ({ windowWidth }) => {
	const title1ScrollSpeed = windowWidth <= 1024 ? -7.5 : 1.2;
	const title2ScrollSpeed = windowWidth <= 1024 ? 6 : -1.2;

	const ref = useRef<HTMLParagraphElement>(null);
	const isOnScreen = useIntersectionObserver(ref, 1);

	useEffect(() => {
		if (isOnScreen) {
			gsap.to("#lineRef > line", {
				duration: 2,
				ease: "expo.out",
				strokeDashoffset: 0,
			});
		}
	}, [isOnScreen]);

	return (
		<section id="section-five" data-scroll-section>
			<div id="target-element" className={S.section}>
				<Marquee
					pauseOnHover
					gradient={false}
					className={S.marquee}
					speed={windowWidth > 1024 ? 15 : 80}
				>
					<p className={S.marqueeText}>Collections</p>
					<p className={S.marqueeText}>Collections</p>
					<p className={S.marqueeText}>Collections</p>
					<p className={S.marqueeText}>Collections</p>
				</Marquee>
				<div className={S.main}>
					<h2
						data-scroll
						className={S.title1}
						data-scroll-direction="horizontal"
						data-scroll-speed={title1ScrollSpeed}
					>
						New
					</h2>
					<img
						className={S.image}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486753/it/4_xgr6j4.png"
						alt=""
					/>
					<h2
						data-scroll
						className={S.title2}
						data-scroll-direction="horizontal"
						data-scroll-target="#target-element"
						data-scroll-speed={title2ScrollSpeed}
					>
						Collection
					</h2>
				</div>
				<div className={S.sub}>
					<p className={S.subText}>Eco-friendly</p>
					<div className={S.subRow}>
						<Line
							id={"lineRef"}
							width="11.22vh"
							height="0.33vh"
							className={S.line1}
						/>
						<p ref={ref} className={S.subText}>
							Wear with attitude
						</p>
					</div>
					<div className={S.subRow}>
						<p className={S.subText}>Minimalistic</p>
						<Line
							id={"lineRef"}
							width="11.22vh"
							height="0.33vh"
							className={S.line2}
						/>
					</div>
				</div>
				<div className={S.textWrapper}>
					<p className={S.text}>
						Minimalism has arrived in a totally new silhouette. The
						York & Dante collection is manufactured with the highest
						quality working to blend the right amount of luxury,
						exclusivity and simplicity. Our brand dedicates itself
						to unique pieces that are standard in its product line
						and can easily become your wardrobe's complement without
						losing your personality or creativity. Our bond is to
						create timeless pieces that provide ceaseless elegance.
						The garments are built to be worn from the city to the
						mountains: made of eco-friendly materials that are
						handmade within an ethical manufacturing process. All
						you need to do is add an attitude of confidence and our
						pieces take care of the rest. Find your style and story
						within this collection, and leave your mark on it.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionFive;

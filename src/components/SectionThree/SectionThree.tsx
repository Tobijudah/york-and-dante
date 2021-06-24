import React, { useEffect } from "react";
import S from "./SectionThree.module.scss";
import image from "../../images/section-3.png";
import { ReactComponent as RotatingText } from "../../svgs/rotating-text.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SectionThree: React.FC = () => {
	useEffect(() => {
		setTimeout(() => {
			gsap.registerPlugin(ScrollTrigger);
			gsap.to("#img", {
				clipPath: "inset(0% 0% 0% 0%)",
				scrollTrigger: {
					trigger: ".red",
					markers: true,
					horizontal: true,
					start: "left 30%",
					scrub: true,
					invalidateOnRefresh: true,
					toggleClass: "active",

					onEnter: () => {
						console.log("Enter");
					},
				},
			});
		}, 10000);
	});

	return (
		<section>
			<div className={S.section}>
				<div className={`red ${S.textWrapper}`}>
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
				<div className={S.imageWrapper}>
					<img id="img" src={image} className={S.image} alt="" />
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

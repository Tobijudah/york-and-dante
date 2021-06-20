import React, { useEffect, useRef } from "react";
import S from "./SectionThree.module.scss";
import image from "../../images/section-3.png";
import { ReactComponent as RotatingText } from "../../svgs/rotating-text.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const SectionThree: React.FC = () => {
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to("#img", {
			scrollTrigger: {
				horizontal: true,
				scroller: "#scroll",
				trigger: "#img",
				start: "left center",
				end: "left left",
				invalidateOnRefresh: true,
				markers: true,
				toggleActions: "play reverse play reverse",
				onEnter: () => {
					console.log("Enter");
				},
			},
			clipPath: "inset(0% 0% 0% 0%)",
		});
	}, []);

	return (
		<section>
			<div className={S.section}>
				<div data-scroll data-speed-2 className={S.textWrapper}>
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
				<div data-scroll data-speed-3 className={S.imageWrapper}>
					<img
						alt=""
						id="img"
						src={image}
						ref={imageRef}
						className={S.image}
					/>
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

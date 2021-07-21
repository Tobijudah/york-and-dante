import Button from "../Button/Button";
import S from "./SectionOne.module.scss";
import React, { useEffect, useRef } from "react";
import SectionOneAnimation from "../../animations/section-one";

type SectionOne = {
	scroll: any;
	preloaded: boolean;
};

const SectionOne: React.FC<SectionOne> = ({ scroll, preloaded }) => {
	const buttonRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const subTextRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (preloaded) {
			videoRef.current?.play();
			SectionOneAnimation(
				[subTextRef.current, buttonRef.current],
				window.innerWidth < 1024 ? 0 : 10
			);
		}
	}, [preloaded]);

	const handleOnClick = () => {
		scroll.scrollTo(document.querySelector("#section-two"), {
			offset: (window.innerWidth / 100) * -6,
		});
	};

	return (
		<section id="section-one" data-scroll-section className={S.section}>
			<div className={S.textWrapper}>
				<h1
					data-splitting=""
					className={`${S.text} split-text hidden-init`}
				>
					The Credenza <sup className={S.sup}>&trade;</sup>
				</h1>
				<p ref={subTextRef} className={`${S.subText} hidden-init`}>
					Another piece from award winning furniture maker Barn & Bed
				</p>
				<div ref={buttonRef} className={`${S.button} hidden-init`}>
					<Button onClick={handleOnClick} color="greige" />
				</div>
			</div>
			<div className={S.videoWrapper}>
				{window.innerWidth > 1024 ? (
					<video
						loop
						muted
						playsInline
						ref={videoRef}
						className={S.video}
						src="https://res.cloudinary.com/tobijudah/video/upload/v1622885626/barn-and-bed/videos/section-one_vnmqej.mp4"
					></video>
				) : (
					<img
						alt=""
						className={S.image}
						src="https://res.cloudinary.com/tobijudah/image/upload/v1626870879/barn-and-bed/photos/section-1_mftakn.png"
					/>
				)}
			</div>
		</section>
	);
};

export default SectionOne;

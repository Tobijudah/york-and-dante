import React from "react";
import Button from "../Button/Button";
import S from "./SectionOne.module.scss";
import video from "../../videos/section-one.mp4";

const SectionOne: React.FC = () => {
	return (
		<section data-scroll-section className={S.section}>
			<div className={S.textWrapper}>
				<h1 className={S.text}>
					Chairs that <br /> defy the norm.
				</h1>
				<div className={S.button}>
					<Button color="greige" />
				</div>
			</div>
			<div className={S.videoWrapper}>
				<video
					loop
					muted
					autoPlay
					playsInline
					className={S.video}
					src='https://res.cloudinary.com/tobijudah/video/upload/v1622885626/barn-and-bed/videos/section-one_vnmqej.mp4'
				></video>
			</div>
		</section>
	);
};

export default SectionOne;

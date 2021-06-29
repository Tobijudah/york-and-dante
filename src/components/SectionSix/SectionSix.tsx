import React from "react";
import S from "./SectionSix.module.scss";

const SectionSix = () => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div data-scroll data-scroll-speed='-10' className={S.videoWrapper}>
					<video
						loop
						muted
						autoPlay
						playsInline
						className={S.video}
						src='https://res.cloudinary.com/tobijudah/video/upload/v1622885629/barn-and-bed/videos/section-six_cchpou.mp4'
					></video>
				</div>
			</div>
		</section>
	);
};

export default SectionSix;

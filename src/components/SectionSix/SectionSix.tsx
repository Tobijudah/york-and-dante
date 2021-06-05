import React from "react";
import S from "./SectionSix.module.scss";
import video from "../../videos/section-six.mp4";

const SectionSix = () => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div className={S.videoWrapper}>
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

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
						src={video}
						className={S.video}
					></video>
				</div>
			</div>
		</section>
	);
};

export default SectionSix;

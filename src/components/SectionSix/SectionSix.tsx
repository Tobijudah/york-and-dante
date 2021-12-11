import React from "react";
import S from "./SectionSix.module.scss";

const SectionSix: React.FC = () => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div data-scroll data-scroll-speed='-10' className={S.videoWrapper}>
					<img src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486753/it/5_jhk3kg.png" alt="" className={S.img} />
				</div>
			</div>
		</section>
	);
};

export default SectionSix;

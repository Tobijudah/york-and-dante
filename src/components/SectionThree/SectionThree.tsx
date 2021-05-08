import React from "react";
import S from "./SectionThree.module.scss";
import image from "../../images/section-3.png";
import { ReactComponent as RotatingText } from "../../svgs/rotating-text.svg";

const SectionThree: React.FC = () => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div data-scroll data-speed-2 className={S.textWrapper}>
					<h2 className={S.title}>
						A minmalistic approach to design
					</h2>
					<p className={S.text}>
						Mutley, you snickering, floppy eared hound. When courage
						is needed, you’re never around. Those medals you wear on
						your moth-eaten chest should be there for bungling at
						which you are best.
					</p>
				</div>
				<div data-scroll data-speed-3 className={S.imageWrapper}>
					<img src={image} className={S.image} alt="" />
					<RotatingText width='20.24vh' height='20.24vh' className={S.svg} />
				</div>
			</div>
		</section>
	);
};

export default SectionThree;

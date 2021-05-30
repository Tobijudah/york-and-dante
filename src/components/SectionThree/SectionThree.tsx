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
					<img src={image} className={S.image} alt="" />
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

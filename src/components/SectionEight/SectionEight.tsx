import React from "react";
import S from "./SectionEight.module.scss";

const SectionEight: React.FC = () => {
	return (
		<section id="section-nine" data-scroll-section>
			<div className={S.section}>
				<div className={S.box}>
					<p className={S.title}>Ardoniss</p>
					<p className={S.text}>
						Our minimalist Barn & Bed chairs is crafted from
						American poplar and metal tubing with a leather sling.
						The frame is powder-coated steel coated in
						environmentally friendly, lead-free paint.{" "}
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486753/it/7-1_y73bqk.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<p className={S.title}>Turbis</p>
					<p className={S.text}>
						Our minimalist Barn & Bed chairs is crafted from
						American poplar and metal tubing with a leather sling.
						The frame is powder-coated steel coated in
						environmentally friendly, lead-free paint.{" "}
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-2_tk158a.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<p className={S.title}>Chimela</p>
					<p className={S.text}>
						Our minimalist Barn & Bed chairs is crafted from
						American poplar and metal tubing with a leather sling.
						The frame is powder-coated steel coated in
						environmentally friendly, lead-free paint.{" "}
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-3_b9syhi.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<p className={S.title}>Hoodlum</p>
					<p className={S.text}>
						Our minimalist Barn & Bed chairs is crafted from
						American poplar and metal tubing with a leather sling.
						The frame is powder-coated steel coated in
						environmentally friendly, lead-free paint.{" "}
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-4_lrjllb.png"
						alt="her"
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionEight;

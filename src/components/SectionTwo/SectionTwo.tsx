import React from "react";
import S from "./SectionTwo.module.scss";
import { ReactComponent as Signature } from "../../svgs/signature.svg";

const SectionTwo = () => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div className={S.textWrapper}>
					<h2 className={S.title}>The story behind the piece</h2>
					<p className={S.text}>
						Barn & Bed is the first environmentally friendly chair
						in the world with minimal design and modern pop-appeal.
						It is made from recycled off-cuts of wood, a material
						that is not harmful to human health or the regeneration
						of nature. The chair has a cross-like profile, making it
						a great shape for gathering around. It can be used both
						indoors and outdoors and its simple contours fit so
						harmoniously into the natural environment that it almost
						seems to blend in with nature altogether.
					</p>
					<Signature className={S.signature} />
					<p className={S.person}>Lead designer</p>
				</div>
				<div className={S.imageWrapper}>
					<div className={S.imageContainer}>
						<div
							data-scroll
							className={S.image}
							data-scroll-speed="-1"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionTwo;

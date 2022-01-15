import React from "react";
import S from "./SectionTwo.module.scss";
import { ReactComponent as Signature } from "../../svgs/signature.svg";

const SectionTwo: React.FC = () => {
	return (
		<section id="section-two" data-scroll-section>
			<div className={S.section}>
				<div className={S.textWrapper}>
					<h2 className={S.title}>The story behind the brand</h2>
					<p className={S.text}>
						York & Dante is a fashion brand from France with the
						vision of making the fashion industry more aware of
						environmental issues and promoting the use of recycled
						and eco-friendly materials in the fashion world. The
						100% organic cotton dresses are delicately printed using
						a cutting-edge screen printer and special non-toxic inks
						that will never fade or run even after washing. With a
						focus on community and great service, we donate 2% of
						all our profits to help preserve the world we live in.
						We know you will love your fashion piece ... we
						certainly do!
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

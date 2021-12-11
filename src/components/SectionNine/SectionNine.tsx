import React from "react";
import Button from "../Button/Button";
import S from "./SectionNine.module.scss";

const SectionEight: React.FC = () => {
	return (
		<section id="section-eight" data-scroll-section>
			<div className={S.section}>
				<div className={S.left}>
					<p className={S.text}>
						Visit our website @Barnandbed.com to see more exquisite
						furnitures
					</p>
					<div className={S.button}>
						<Button color="red" />
					</div>
				</div>
				<div className={S.right}>
					<img
						className={S.image1}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486755/it/8-1_lvr5jx.png"
						alt=""
					/>
					<img
						className={S.image2}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/8-2_posszt.png"
						alt=""
					/>
					<img
						className={S.image3}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486755/it/8-3_okcfgq.png"
						alt=""
					/>
					<p className={S.title}>Barn & Bed</p>
				</div>
			</div>
		</section>
	);
};

export default SectionEight;

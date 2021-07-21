import React from "react";
import Button from "../Button/Button";
import S from "./SectionEight.module.scss";
import image1 from '../../images/section-3.png';
import image2 from '../../images/section-8-2.png';
import image3 from '../../images/section-8-3.png';

const SectionEight = () => {
	return (
		<section id='section-eight' data-scroll-section>
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
          <img className={S.image1} src={image1} alt=""/>
          <img className={S.image2} src={image2} alt=""/>
          <img className={S.image3} src={image3} alt=""/>
          <p className={S.title}>Barn & Bed</p>
        </div>
			</div>
		</section>
	);
};

export default SectionEight;

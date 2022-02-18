import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import S from "./SectionNine.module.scss";

type SectionEightProps = {
	windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
	const textScrollSpeed = windowWidth <= 1024 ? -5 : 3;

	return (
		<section id="section-nine" data-scroll-section>
			<div className={S.section}>
				<div className={S.left}>
					<p className={S.text}>
						Check out more pictures of our collections
					</p>
					<Link to="/gallery">
						<div className={S.button}>
							<Button use="section-nine" text="go to gallery" />
						</div>
					</Link>
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
					<p
						data-scroll
						className={S.title}
						data-scroll-direction="horizontal"
						data-scroll-speed={textScrollSpeed}
					>
						York & Dante
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionEight;

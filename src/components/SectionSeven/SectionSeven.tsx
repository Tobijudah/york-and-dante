import React from "react";
import Marquee from "react-fast-marquee";
import S from "./SectionSeven.module.scss";
import { ReactComponent as Line } from "../../svgs/line.svg";
import { ReactComponent as Plus } from "../../svgs/plus.svg";

type SectionSevenProps = {
	windowWidth: number;
};

const SectionSeven: React.FC<SectionSevenProps> = ({ windowWidth }) => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div className={S.marqueeSection}>
					<Marquee
						pauseOnHover
						gradient={false}
						className={S.marquee}
						speed={windowWidth > 1024 ? 15 : 80}
					>
						<p className={S.marqueeText}>Finesse</p>
						<p className={S.marqueeText}>Finesse</p>
						<p className={S.marqueeText}>Finesse</p>
						<p className={S.marqueeText}>Finesse</p>
						<p className={S.marqueeText}>Finesse</p>
					</Marquee>
				</div>
				<div className={S.main}>
					<div className={S.up}>
						<div className={S.left}>
							<div className={S.row}>
								<Line
									id={"lineRef"}
									width="5vh"
									height="0.33vh"
									className={S.line1}
								/>
								<p className={S.largeText}>Casual</p>
							</div>
							<div className={S.row2}>
								<Plus />
							</div>
							<div className={S.row3}>
								<p className={S.largeText}>Street Style</p>
								<Line
									id={"lineRef"}
									width="5vh"
									height="0.33vh"
									className={S.line2}
								/>
							</div>
						</div>
						<div className={S.right}>
							<p className={S.smallText}>
								We believe that fashion should not be
								intimidating, luxury is more than leather and
								silk, and prices are not always the best
								criteria to judge a good fashion brand.
							</p>
						</div>
					</div>
					<div className={S.down}>
						<img
							className={S.img}
							src={
								windowWidth > 1024
									? "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637522594/it/6_eda4xd.png"
									: "https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1639309634/it/6-mobile_rk62d6.png"
							}
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SectionSeven;

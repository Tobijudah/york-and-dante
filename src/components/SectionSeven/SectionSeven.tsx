import React from "react";
import Marquee from "react-fast-marquee";
import S from "./SectionSeven.module.scss";
import { ReactComponent as Line } from "../../svgs/line.svg";
import { ReactComponent as Plus } from "../../svgs/plus.svg";

const SectionSeven: React.FC = () => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div className={S.marqueeSection}>
					<Marquee
						pauseOnHover
						gradient={false}
						className={S.marquee}
						speed={window.innerWidth > 600 ? 15 : 80}
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
								Our minimalist Barn & Bed chairs is crafted from
								American poplar and metal tubing with a leather
								sling. The frame is powder-coated steel coated
								in environmentally friendly, lead-free paint.{" "}
							</p>
						</div>
					</div>
					<div className={S.down}>
						<img
							className={S.img}
							src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637522594/it/6_eda4xd.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SectionSeven;

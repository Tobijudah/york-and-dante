import React from "react";
import Marquee from "react-fast-marquee";
import S from "./SectionFive.module.scss";
import image from "../../images/section-5.png";
import { ReactComponent as Line } from "../../svgs/line.svg";

const SectionFive: React.FC = () => {
	const title1ScrollSpeed = window.innerWidth < 1024 ? 2.5 : 1.2;
	const title2ScrollSpeed = window.innerWidth < 1024 ? -5 : -1.2;

	return (
		<section data-scroll-section>
			<div id="target-element" className={S.section}>
				<Marquee
					speed={15}
					pauseOnHover
					gradient={false}
					className={S.marquee}
				>
					<p className={S.marqueeText}>Products</p>
					<p className={S.marqueeText}>Products</p>
					<p className={S.marqueeText}>Products</p>
					<p className={S.marqueeText}>Products</p>
				</Marquee>
				<div className={S.main}>
					<h2
						data-scroll
						className={S.title1}
						data-scroll-direction="horizontal"
						data-scroll-speed={title1ScrollSpeed}
					>
						The
					</h2>
					<img className={S.image} src={image} alt="" />
					<h2
						data-scroll
						className={S.title2}
						data-scroll-direction="horizontal"
						data-scroll-target="#target-element"
						data-scroll-speed={title2ScrollSpeed}
					>
						Credenza
					</h2>
				</div>
				<div className={S.sub}>
					<p className={S.subText}>Comfy sofas</p>
					<div className={S.subRow}>
						<Line
							width="11.22vh"
							height="0.33vh"
							className={S.line1}
						/>
						<p className={S.subText}>Cylindrical design</p>
					</div>
					<div className={S.subRow}>
						<p className={S.subText}>Arc back hinge</p>
						<Line
							width="11.22vh"
							height="0.33vh"
							className={S.line2}
						/>
					</div>
				</div>
				<div className={S.textWrapper}>
					<p className={S.text}>
						Awarded a Red Dot Design Prize, The Credenza chair is
						made from a single, solid piece of rubber wood so there
						are no joints or weak points. It has a minimalist but
						attractive design with natural accents that give it an
						organic feel. It's also made from FSC®-certified
						cushions and uses only materials that are 100%
						recyclable. As well as being easy to assemble, it has no
						mechanical parts for a low service life and great
						durability. Furthermore, This piece is designed with
						care and consideration for global comfort in mind. The
						frame’s form follows the contours of the body, offering
						support for your back while alleviating pressure on your
						spine and other joints.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionFive;

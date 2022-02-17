import React from "react";
import Button from "../Button/Button";
import S from "./Credits.module.scss";
import Marquee from "react-fast-marquee";
import { ReactComponent as GitHub } from "../../svgs/github.svg";
import { ReactComponent as Behance } from "../../svgs/behance.svg";
import { ReactComponent as Twitter } from "../../svgs/twitter.svg";
import { ReactComponent as LinkedIn } from "../../svgs/linkedin.svg";

type CreditsProps = {
	scroll: any;
};

const Credits: React.FC<CreditsProps> = ({ scroll }) => {
	const handleOnClick = () => {
		scroll.scrollTo(document.querySelector("#section-one"));
	};

	return (
		<section data-scroll-section className={S.section}>
			<Marquee
				pauseOnHover
				gradient={false}
				className={S.marquee}
				speed={window.innerWidth > 1024 ? 15 : 80}
			>
				<p className={S.marqueeText}>Credits</p>
				<p className={S.marqueeText}>Credits</p>
				<p className={S.marqueeText}>Credits</p>
				<p className={S.marqueeText}>Credits</p>
				<p className={S.marqueeText}>Credits</p>
			</Marquee>
			<div className={S.credits}>
				<p className={S.quoteOne}>
					“On a certain day, I just felt like exploring designing a
					site with a horizontal scroll”
				</p>
				<div className={S.credit1}>
					<p className={S.creditTitle}>Development & Motion</p>
					<p className={S.textTypeOne}>Oluwatobiju</p>
					<p className={S.textTypeOne}>Judah</p>
					<div className={S.media}>
						<a
							className={S.icon}
							href="https://twitter.com/tobijudah"
						>
							<Twitter />
						</a>
						<a
							className={S.icon}
							href="https://www.linkedin.com/in/oluwatobiju-judah-omotosho/"
						>
							<LinkedIn />
						</a>
						<a
							className={S.icon}
							href="https://github.com/Tobijudah"
						>
							<GitHub />
						</a>
					</div>
				</div>
				<div className={S.credit2}>
					<p className={S.creditTitle}>Design & Art direction</p>
					<p className={S.textTypeOne}>Enyinnaya</p>
					<p className={S.textTypeOne}>Felix</p>
					<div className={S.media}>
						<a
							className={S.icon}
							href="https://twitter.com/P_h_i_l_i_x"
						>
							<Twitter />
						</a>
						<a
							className={S.icon}
							href="https://www.linkedin.com/in/felix-enyinnaya-b2593b173/"
						>
							<LinkedIn />
						</a>
						<a
							className={S.icon}
							href="https://www.behance.net/felixenyinnayadesign"
						>
							<Behance />
						</a>
					</div>
				</div>
				<p className={S.quoteTwo}>
					“Tobiju, reached out. Bro, let me build this.”
				</p>
				<div className={S.box1}>
					<p className={S.boxTitle}>image & video credits</p>
					<p className={S.textTypeThree}>
						<a className={S.bold} href="">
							Cottonbro
						</a>{" "}
						on Pexels
					</p>
				</div>
				<div className={S.box2}>
					<p className={S.boxTitle}>fonts</p>
					<p className={S.textTypeThree}>New York</p>
					<p className={S.textTypeThree}>Neue Haas Grotesk</p>
				</div>
				<div className={S.button}>
					<Button color="white" onClick={handleOnClick} />
				</div>
			</div>
		</section>
	);
};

export default Credits;

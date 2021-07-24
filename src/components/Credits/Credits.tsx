import React from "react";
import Button from "../Button/Button";
import S from "./Credits.module.scss";
import { ReactComponent as Web } from "../../svgs/web.svg";
import { ReactComponent as Twitter } from "../../svgs/twitter.svg";
import { ReactComponent as LinkedIn } from "../../svgs/linkedin.svg";

type Credits = {
	scroll: any;
};

const Credits: React.FC<Credits> = ({ scroll }) => {
	const handleOnClick = () => {
		scroll.scrollTo(document.querySelector("#section-one"));
	};

	return (
		<section data-scroll-section>
			<div className={S.credits}>
				<p className={S.quoteOne}>
					“On a certain day, I just felt like exploring designing a
					site with a horizontal scroll”
				</p>
				<p className={S.quoteTwo}>
					“Tobiju, reached out. Bro, let me build this.”
				</p>
				<div className={S.button}>
					<Button color="greige" onClick={handleOnClick} />
				</div>
				<div className={S.credit1}>
					<p className={S.creditTitle}>Development</p>
					<p className={S.textTypeOne}>Oluwatobiju</p>
					<p className={S.textTypeOne}>Judah</p>
					<div className={S.media}>
						<a href="" className={S.icon}>
							<Twitter />
						</a>
						<a href="" className={S.icon}>
							<LinkedIn />
						</a>
						<a href="" className={S.icon}>
							<Web />
						</a>
					</div>
				</div>
				<div className={S.credit2}>
					<p className={S.creditTitle}>Design & Art direction</p>
					<p className={S.textTypeOne}>Enyinnaya</p>
					<p className={S.textTypeOne}>Felix</p>
					<div className={S.media}>
						<a href="" className={S.icon}>
							<Twitter />
						</a>
						<a href="" className={S.icon}>
							<LinkedIn />
						</a>
						<a href="" className={S.icon}>
							<Web />
						</a>
					</div>
				</div>
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
			</div>
		</section>
	);
};

export default Credits;

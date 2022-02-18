import gsap from "gsap";
import splitting from "splitting";
import S from "./Credits.module.scss";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { PageProps } from "../page.types";
import Nav from "../../components/Nav/Nav";
import React, { useEffect, useRef } from "react";
import Button from "../../components/Button/Button";
import { ReactComponent as GitHub } from "../../svgs/github.svg";
import { ReactComponent as Behance } from "../../svgs/behance.svg";
import { ReactComponent as Twitter } from "../../svgs/twitter.svg";
import { ReactComponent as LinkedIn } from "../../svgs/linkedin.svg";

const Credits: React.FC<PageProps> = ({
	appLoaded,
	preloaded,
	navOnClick,
	windowWidth,
	setAppLoaded,
}) => {
	const navRef = useRef(null);

	useEffect(() => {
		if (preloaded) {
			setAppLoaded(true);
		}
	}, [preloaded]);

	useEffect(() => {
		if (preloaded) {
			splitting({ by: "words", target: "#credits .split-text" });
			const delay = appLoaded ? 3 : 0;
			const credits = gsap.utils.selector("#credits");
			gsap.set(credits(".hidden-init"), { visibility: "visible" });
			gsap.from(credits(".split-text .word, .whitespace"), {
				delay: 0.25 + delay,
				duration: 0.75,
				opacity: 0,
				yPercent: 50,
				stagger: 0.025,
				ease: "power2.out",
			});
			gsap.to(`.${S.animateOpacity}`, {
				delay: 1 + delay,
				duration: 1.25,
				opacity: 1,
				stagger: 0.05,
			});
		}
	}, [preloaded]);

	useEffect(() => {
		const html = document.querySelector("html");
		if (html) html.setAttribute("data-page", "credits");
		return () => html?.removeAttribute("data-page");
	}, []);

	return (
		<>
			<Nav ref={navRef} onClick={navOnClick} />
			<section id="credits" className={S.section}>
				<Marquee
					pauseOnHover
					gradient={false}
					className={S.marquee}
					speed={windowWidth > 1024 ? 15 : 80}
				>
					<p className={S.marqueeText}>Credits</p>
					<p className={S.marqueeText}>Credits</p>
					<p className={S.marqueeText}>Credits</p>
					<p className={S.marqueeText}>Credits</p>
					<p className={S.marqueeText}>Credits</p>
				</Marquee>
				<div className={S.credits}>
					<p
						data-splitting=""
						className={`${S.quoteOne} split-text hidden-init`}
					>
						An exploration of a horizontal scroll experience using the Golden cannon grid
					</p>
					<div className={S.credit1}>
						<p
							data-splitting=""
							className={`${S.creditTitle} split-text hidden-init`}
						>
							Design & Art direction
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeOne} split-text hidden-init`}
						>
							Enyinnaya
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeOne} split-text hidden-init`}
						>
							Felix
						</p>
						<div className={S.media}>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://twitter.com/P_h_i_l_i_x"
							>
								<Twitter />
							</a>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://www.linkedin.com/in/felix-enyinnaya-b2593b173/"
							>
								<LinkedIn />
							</a>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://www.behance.net/felixenyinnayadesign"
							>
								<Behance />
							</a>
						</div>
					</div>
					<div className={S.credit2}>
						<p
							data-splitting=""
							className={`${S.creditTitle} split-text hidden-init`}
						>
							Development & Motion
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeOne} split-text hidden-init`}
						>
							Oluwatobiju
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeOne} split-text hidden-init`}
						>
							Judah
						</p>
						<div className={S.media}>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://twitter.com/tobijudah"
							>
								<Twitter />
							</a>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://www.linkedin.com/in/oluwatobiju-judah-omotosho/"
							>
								<LinkedIn />
							</a>
							<a
								className={`${S.animateOpacity} ${S.icon}`}
								href="https://github.com/Tobijudah"
							>
								<GitHub />
							</a>
						</div>
					</div>
					<p
						data-splitting=""
						className={`${S.quoteTwo} split-text hidden-init`}
					>
						Transitions. Motion. Interaction. with GSAP and Locomotive
					</p>
					<div className={S.box1}>
						<p
							data-splitting=""
							className={`${S.boxTitle} split-text hidden-init`}
						>
							image & video credits
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeThree} split-text hidden-init`}
						>
							<a className={S.bold} href="">
								Cottonbro
							</a>{" "}
							on Pexels
						</p>
					</div>
					<div className={S.box2}>
						<p
							data-splitting=""
							className={`${S.boxTitle} split-text hidden-init`}
						>
							fonts
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeThree} split-text hidden-init`}
						>
							New York
						</p>
						<p
							data-splitting=""
							className={`${S.textTypeThree} split-text hidden-init`}
						>
							Neue Haas Grotesk
						</p>
					</div>
					<Link className={`${S.animateOpacity} ${S.button}`} to="/">
						<Button use="credits" text="back to home" />
					</Link>
				</div>
			</section>
		</>
	);
};

export default Credits;

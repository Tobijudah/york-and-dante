import Button from "../Button/Button";
import S from "./SectionOne.module.scss";
import React, { useEffect, useRef } from "react";
import SectionOneAnimation from "../../animations/section-one";

type SectionOneProps = {
	scroll: any;
	appLoaded: boolean;
	preloaded: boolean;
};

const SectionOne: React.FC<SectionOneProps> = ({
	scroll,
	appLoaded,
	preloaded,
}) => {
	const buttonRef = useRef<HTMLDivElement>(null);
	const subTextRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const loadedAnimationDelay = window.innerWidth < 1024 ? 0.8 : 0.5;
		if (preloaded) {
			SectionOneAnimation(
				[subTextRef.current, buttonRef.current],
				!appLoaded ? 0 : loadedAnimationDelay
			);
		}
	}, [preloaded]);

	const handleOnClick = () => {
		scroll.scrollTo(document.querySelector("#section-two"), {
			offset: (window.innerWidth / 100) * -6,
		});
	};

	return (
		<section id="section-one" data-scroll-section>
			<div className={S.section}>
				<h1
					data-splitting=""
					className={`${S.text} split-text hidden-init`}
				>
					York & Dante <sup className={S.sup}>&reg;</sup>
				</h1>
				<p ref={subTextRef} className={`${S.subText} hidden-init`}>
					Natural Beauty, Fashionable Eco-Friendly Design.
				</p>
				<div ref={buttonRef} className={`${S.button} hidden-init`}>
					<Button onClick={handleOnClick} color="white" />
				</div>
			</div>
		</section>
	);
};

export default SectionOne;

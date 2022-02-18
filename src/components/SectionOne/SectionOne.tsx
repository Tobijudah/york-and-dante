import Button from "../Button/Button";
import S from "./SectionOne.module.scss";
import React, { useEffect, useRef } from "react";
import SectionOneAnimation from "../../animations/section-one";

type SectionOneProps = {
	scroll: any;
	appLoaded: boolean;
	preloaded: boolean;
	windowWidth: number;
};

const SectionOne: React.FC<SectionOneProps> = ({
	scroll,
	appLoaded,
	preloaded,
	windowWidth,
}) => {
	const buttonRef = useRef<HTMLDivElement>(null);
	const subTextRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const loadedAnimationDelay = windowWidth <= 1024 ? 3.3 : 3;
		if (preloaded) {
			SectionOneAnimation(
				[subTextRef.current, buttonRef.current, "#section-one button + p"],
				!appLoaded ? 0 : loadedAnimationDelay
			);
		}
	}, [preloaded]);

	const handleOnClick = () => {
		scroll.scrollTo(document.querySelector("#section-two"), {
			offset: (windowWidth / 100) * -6,
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
					<Button
						text="explore"
						use="section-one"
						onClick={handleOnClick}
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionOne;

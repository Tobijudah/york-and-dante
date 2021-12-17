import Button from "../Button/Button";
import S from "./SectionOne.module.scss";
import React, { useEffect, useRef } from "react";
import SectionOneAnimation from "../../animations/section-one";

type SectionOneProps = {
	scroll: any;
	preloaded: boolean;
};

const SectionOne: React.FC<SectionOneProps> = ({ scroll, preloaded }) => {
	const buttonRef = useRef<HTMLDivElement>(null);
	const subTextRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (preloaded) {
			SectionOneAnimation(
				[subTextRef.current, buttonRef.current],
				window.innerWidth < 1024 ? 0 : 1
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
					The Credenza <sup className={S.sup}>&trade;</sup>
				</h1>
				<p ref={subTextRef} className={`${S.subText} hidden-init`}>
					Another piece from award winning furniture maker Barn & Bed
				</p>
				<div ref={buttonRef} className={`${S.button} hidden-init`}>
					<Button onClick={handleOnClick} color="greige" />
				</div>
			</div>
		</section>
	);
};

export default SectionOne;

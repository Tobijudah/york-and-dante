import gsap from "gsap";
import Button from "../Button/Button";
import S from "./SectionSeven.module.scss";
import image from "../../images/section-7.png";
import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const SectionSeven = () => {
	const ref = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const [amount, setAmount] = useState<number>(1);
	const isOnScreen = useIntersectionObserver(ref, 0.25);

	useEffect(() => {
		if (isOnScreen && imageRef.current) {
			gsap.to(imageRef.current, {
				scale: 1,
				duration: 4,
				ease: "expo.out",
				clipPath: "inset(0% 0% 0% 0%)",
			});
		}
	}, [isOnScreen, imageRef.current]);

	const add = () => setAmount((amount) => amount + 1);

	const subtract = () =>
		setAmount((amount) => {
			if (amount === 0) return amount;
			return amount - 1;
		});

	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div className={S.left}>
					<div ref={ref} className={S.imageContainer}>
						<img
							alt=""
							src={image}
							ref={imageRef}
							className={S.image}
						/>
					</div>

					<div className={S.button}>
						<Button text color="red" />
					</div>
					<p className={S.title}>The Credenza</p>
				</div>
				<div className={S.right}>
					<div className={S.rows}>
						<div className={S.row}>
							<p className={S.text}>Color</p>
							<div className={S.grid}>
								<div className={S.muddyWaters}></div>
								<div className={S.sandDrift}></div>
								<div className={S.paleSky}></div>
							</div>
						</div>
						<div className={S.row}>
							<p className={S.text}>Quantity</p>
							<div className={S.grid}>
								<div onClick={subtract} className={S.priceBox}>
									-
								</div>
								<div className={S.priceBox}>{amount}</div>
								<div onClick={add} className={S.priceBox}>
									+
								</div>
							</div>
						</div>
					</div>
					<div className={S.texts}>
						<p className={S.price}>${amount * 550}</p>
						<p className={S.text}>See reviews</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SectionSeven;

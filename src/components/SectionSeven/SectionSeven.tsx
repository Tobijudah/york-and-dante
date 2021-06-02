import React, { useState } from "react";
import S from "./SectionSeven.module.scss";
import image from "../../images/section-7.png";
import Button from "../Button/Button";

const SectionSeven = () => {
	const [amount, setAmount] = useState<number>(1);

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
					<img className={S.image} src={image} alt="" />
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

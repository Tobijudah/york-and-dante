import React from "react";
import S from "./Alphabets.module.scss";

const alphabets = [
	"-",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

type AlphabetProps = {
	dataIndex: number;
	letterIndex: number;
};

const Alphabets = React.forwardRef<HTMLDivElement, AlphabetProps>(
	({ dataIndex, letterIndex }, ref) => {
		return (
			<div
				ref={ref}
				data-index={dataIndex}
				className={S.alphabets}
				data-letter={letterIndex}
			>
				{alphabets.map((alphabet) => (
					<p className={S.alphabet} key={alphabet}>
						{alphabet}
					</p>
				))}
			</div>
		);
	}
);

export default Alphabets;

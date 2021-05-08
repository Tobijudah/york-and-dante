import React from "react";
import S from "./SectionFour.module.scss";
import { ReactComponent as Corner } from "../../svgs/corner.svg";
import { ReactComponent as Scribble } from "../../svgs/scribble.svg";

const SectionFour: React.FC = () => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div className={S.left}>
					<Corner width='5.5vh' height='5.5vh' />
					<h2 className={S.title}>
						Closer to <span className={S.bronze}>nature</span> than
						you imagine
					</h2>
					<Scribble width='43.68vh' height='23.59vh' className={S.scribble} />
				</div>
				<div className={S.right}>
					<h3 className={S.header}>
						Made of composite materials sewn into the fabric of
						every piece
					</h3>
					<p className={S.text}>
						I never spend much time in school but I taught ladies
						plenty. It’s true I hire my body out for pay, hey hey.
						I’ve gotten burned over Cheryl Tiegs, blown up for
						Raquel Welch. But when I end up in the hay it’s only
						hay, hey hey. I might jump an open drawbridge, or Tarzan
						from a vine. ’Cause I’m the unknown stuntman that makes
						wood.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionFour;

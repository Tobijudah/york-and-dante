import React from "react";
import S from "./SectionTwo.module.scss";

const SectionTwo = () => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div data-scroll className={S.textWrapper}>
					<h2 className={S.title}>The story behind the piece</h2>
					<p className={S.text}>
						Top Cat! The most effectual Top Cat! Who’s intellectual
						close friends get to call him T.C., providing it’s with
						dignity. Top Cat! The indisputable leader of the gang.
						He’s the boss, he’s a pip, he’s the championship. He’s
						the most tip top, Top Cat.
					</p>
					<p className={S.text}>
						There’s a voice that keeps on calling me. Down the road,
						that’s where I’ll always be. Every stop I make, I make a
						new friend. Can’t stay for long, just turn around and
						I’m gone again. Maybe tomorrow, I’ll want to settle
						down, Until tomorrow, I’ll just keep moving on.
					</p>
				</div>
				<div data-scroll className={S.imageWrapper}></div>
			</div>
		</section>
	);
};

export default SectionTwo;

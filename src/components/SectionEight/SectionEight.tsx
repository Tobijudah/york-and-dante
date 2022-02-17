import gsap from "gsap";
import { LongLine } from "../LongLine";
import React, { useEffect } from "react";
import S from "./SectionEight.module.scss";
import useRefArray from "../../hooks/useRefArray";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type SectionEightProps = {
	windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
	const refs = useRefArray<SVGSVGElement>(5);
	const linesVisibility: boolean[] = [
		useIntersectionObserver(refs[0], 1),
		useIntersectionObserver(refs[1], 1),
		useIntersectionObserver(refs[2], 1),
		useIntersectionObserver(refs[3], 1),
		useIntersectionObserver(refs[4], 1),
	];

	useEffect(() => {
		if (!refs) return;
		refs.forEach((ref, i) => {
			if (linesVisibility[i]) {
				gsap.to(ref.current?.firstChild, {
					delay: windowWidth > 1024 ? 0.5 : 0.2,
					duration: 2.5,
					ease: "expo.out",
					strokeDashoffset: 0,
				});
			}
		});
	}, [linesVisibility, refs]);

	return (
		<section id="section-eight" data-scroll-section>
			<div className={S.section}>
				<div className={S.box}>
					<LongLine
						ref={refs[0]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>Chimela</p>
					<p className={S.text}>
						Each piece of the Chimela has been designed to
						accentuate the beauty of the female form, from the
						intricate point d'esprit embroidery. The simplicity and
						minimal approach is what makes this fashion collection
						unique.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486753/it/7-1_y73bqk.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[1]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>Turbis</p>
					<p className={S.text}>
						Designed by luchesse and crafted using luscious fabrics,
						this Turbis collection is as opulent as it is versatile.
						Versatile enough to take on any sexy occasion. Designs
						of this collection are designed to create style you can
						call your own.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-2_tk158a.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[2]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>Ardoniss</p>
					<p className={S.text}>
						Ardoniss is a fashion collection from luchesse; this
						piece depicts the creative and innovative quality of
						modern fashion. Ardoniss collection encompasses the
						classical styles of tunics, dresses and trousers with 3D
						appliqués adorning every hem.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-3_b9syhi.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[3]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>Plaid</p>
					<p className={S.text}>
						Plaid is a clean, modern, and minimalistic suit style
						fashion collection from Luchesse. The lines have been
						refined to create a dressy uniform that can translate
						day to night. The exclusive fabrics we use will fit
						perfectly into your everyday work wardrobe.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-4_lrjllb.png"
						alt="her"
					/>
					<LongLine
						ref={refs[4]}
						className={S.line}
						windowWidth={windowWidth}
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionEight;

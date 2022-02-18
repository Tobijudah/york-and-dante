import gsap from "gsap";
import splitting from "splitting";
import RevealTextAnimation from "./reveal-text";
gsap.config({
	force3D: true,
});

const SectionOneAnimation = (elements: gsap.TweenTarget[], delay: number) => {
	splitting();
	const one = gsap.utils.selector("#section-one");
	gsap.set(one(".hidden-init"), { visibility: "visible" });

	RevealTextAnimation(one(".split-text .word > .char, .whitespace"), delay);
	gsap.from(elements[0], {
		delay: delay,
		duration: 1.5,
		opacity: 0,
		ease: "power2.inOut",
	});
	gsap.from(elements[1], {
		delay: delay,
		duration: 1.5,
		xPercent: 175,
		ease: "power2.out",
	});
	gsap.from(elements[2], {
		duration: 1.5,
		delay: delay + 1,
		opacity: 0,
	});
};

export default SectionOneAnimation;

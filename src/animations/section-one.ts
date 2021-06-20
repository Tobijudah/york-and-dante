import gsap from "gsap";
import RevealTextAnimation from "./reveal-text";
gsap.config({
	force3D: true,
});

const SectionOneAnimation = (elements: gsap.TweenTarget[]) => {
	gsap.set("body", { overflowY: "auto" });

	const one = gsap.utils.selector("#section-one");
	gsap.set(one(".hidden-init"), { visibility: "visible" });

	RevealTextAnimation(one(".split-text .word > .char, .whitespace"), 0);
	gsap.from(elements[0], {
		duration: 1.5,
		opacity: 0,
		ease: "power2.inOut",
	});
	gsap.from(elements[1], {
		duration: 1.5,
		xPercent: 175,
		ease: "power2.out",
	});
};

export default SectionOneAnimation;

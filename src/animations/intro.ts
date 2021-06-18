import gsap from "gsap";
gsap.config({
	force3D: true,
});

const IntroAnimation = (elements: gsap.TweenTarget[]) => {
	elements.forEach((element) => gsap.set(element, { visibility: "visible" }));

	gsap.from(elements[0], {
		duration: 1.5,
		xPercent: -100,
		ease: "power2.out",
	});
	gsap.from(elements[1], {
		duration: 1.5,
		yPercent: -100,
		ease: "power2.out",
	});
};

export default IntroAnimation;

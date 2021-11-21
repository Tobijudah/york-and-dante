import gsap from "gsap";
gsap.config({
	force3D: true,
});

const IntroAnimation = (element: gsap.TweenTarget) => {
	gsap.set(element, { visibility: "visible" });

	gsap.from(element, {
		duration: 1.5,
		xPercent: -100,
		ease: "power2.out",
	});
};

export default IntroAnimation;

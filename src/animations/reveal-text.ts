import gsap from "gsap";
gsap.config({
	force3D: true,
});

const RevealTextAnimation = (element: gsap.TweenTarget, delay: number) => {
	const revealText = gsap.timeline();
	revealText
		.from(element, {
			delay: delay,
			duration: 1.5,
      opacity: 0,
      yPercent: 100,
      stagger: 0.05,
      ease: "power3.out",
		})
		.eventCallback("onComplete", () => {
			revealText.kill();
		});
};

export default RevealTextAnimation;

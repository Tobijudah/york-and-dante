import gsap from "gsap";
gsap.config({
	force3D: true,
});

const FadeOutAnimation = (delay: number, element: gsap.TweenTarget, callback: () => void) => {
	const fadeOut = gsap.timeline();
	fadeOut
		.to(element, {
			delay: delay + 2,
			duration: 1,
			opacity: 0,
		})
		.eventCallback("onComplete", () => {
			fadeOut.kill();
      callback();
		});

	return fadeOut.totalDuration();
};

export default FadeOutAnimation;

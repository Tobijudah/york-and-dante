import gsap from "gsap";
gsap.config({
	force3D: true,
});

const PreloaderAnimation = (elements: gsap.TweenTarget[]) => {
	gsap.set(elements[0], { visibility: "visible" });
	const preloader = gsap.timeline();
	preloader
		.to(elements[0], {
			duration: 6,
			clipPath: "inset(49.85% 0% 49.85% 0%)",
		})
		.to(elements[0], {
			delay: 0.8,
			duration: 0.8,
			clipPath: "inset(0% 0%)",
			ease: "power3.out",
		})
		.to(
			elements[1],
			{
				duration: 0.8,
				opacity: 1,
			},
			"-=0.8"
		)
		.to(elements[2], {
			duration: 0.5,
			opacity: 0.2,
		})
		.eventCallback("onComplete", () => {
			preloader.kill();
		});

	return preloader.totalDuration();
};

export default PreloaderAnimation;

import gsap from "gsap";
gsap.config({
	force3D: true,
});

const PreloaderAnimation = (elements: gsap.TweenTarget[]) => {
	gsap.set(elements[0], { visibility: "visible" });
	const preloader = gsap.timeline();
	preloader
		.to(elements[0], {
			duration: 7.5,
			width: "100vw",
		})
		.to(elements[0], {
			delay: 0.8,
			duration: 0.8,
			height: "100vh",
			ease: "power3.out",
		})
		.to(elements[2], {
			duration: 0.5,
			opacity: 0.2,
		})
		.to(
			elements[1],
			{
				duration: 0.8,
				opacity: 1,
			},
			"-=0.8"
		)
		.eventCallback("onComplete", () => {
			preloader.kill();
		});

	return preloader.totalDuration();
};

export default PreloaderAnimation;

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// this is the helper function that sets it all up. Pass in the content <div> and then the wrapping viewport <div> (can be the elements or selector text). It also sets the default "scroller" to the content so you don't have to do that on all your ScrollTriggers.
const initSmoothHorizontalScroll = () => {
	gsap.registerPlugin(ScrollTrigger);

	let sections: HTMLElement[] = gsap.utils.toArray(
			"section",
			document.querySelector("#scroll-container")
		),
		// nav = gsap.utils.toArray("nav div"),
		getMaxWidth = () =>
			sections.reduce((val, section) => val + section.offsetWidth, 0),
		maxWidth = getMaxWidth(),
		scrollSpeed = 4,
		snapProgress: number,
		lastScrollTween = 0,
		tl = gsap.timeline();

	console.log({ sections, maxWidth });
	console.log(window.innerWidth - maxWidth);
	console.log(maxWidth / scrollSpeed);

	tl.to(sections, {
		x: () => window.innerWidth - maxWidth,
		duration: 1,
		ease: "none",
	});

	ScrollTrigger.create({
		animation: tl,
		trigger: ".wrapper",
		pin: true,
		scrub: 1,
		end: () => "+=" + maxWidth / scrollSpeed,
		invalidateOnRefresh: true,
	});

	sections.forEach((sct, i) => {
		ScrollTrigger.create({
			trigger: sct,
			markers: true,
			start: () =>
				"top top-=" +
				(sct.offsetLeft - window.innerWidth / 2) *
					(maxWidth / (maxWidth - window.innerWidth)),
			end: () =>
				"+=" +
				sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
			toggleClass: { targets: sct, className: "active" },
		});
	});

	function init() {
		gsap.set(sections, { x: 0 });
		maxWidth = getMaxWidth();
		let position = 0,
			distance = maxWidth - window.innerWidth;
		// add a label for each section to the timeline (for "labelsDirectional" functionality):
		tl.add("label0", 0);
		sections.forEach((section, i) => {
			let progress = position;
			position += section.offsetWidth / distance;
			tl.add("label" + (i + 1), position);
			// nav[i].onclick = () => {
			// 	// link clicks should trigger a scroll tween to the appropriate spot
			// 	snapProgress = progress; // save the current progress so that if we can return it in the directionalSnap() when called right after the scrollTo tween is done (because ScrollTrigger would normally look at the velocity and snap, causing it to overshoot to the next section)
			// 	lastScrollTween = Date.now(); // for checking in the directionalSnap() if there was a recent scrollTo that finished, in which case we'd skip the snapping (well, return the current snapProgress)
			// 	gsap.to(window, {
			// 		scrollTo: (maxWidth / scrollSpeed) * progress,
			// 		duration: 1,
			// 		overwrite: "auto",
			// 	});
			// };
		});
	}

	init();
	ScrollTrigger.addEventListener("refreshInit", init); // on resize, things must be recalculated

	// a helper function for doing "labelsDirectional" snapping, but we can't use that directly since we're doing some special things with scrollTo tweens, and we need a way to skip the snap if a scrollTo recently finished (otherwise it'll overshoot to the next section)
	// function directionalSnap(timeline) {
	// 	return (value, st) => {
	// 		if (Date.now() - lastScrollTween < 1650) {
	// 			// recently finished doing a tweened scroll (clicked link), so don't do any snapping.
	// 			return snapProgress;
	// 		}
	// 		let a = [],
	// 			labels = timeline.labels,
	// 			duration = timeline.duration(),
	// 			p,
	// 			i;
	// 		for (p in labels) {
	// 			a.push(labels[p] / duration);
	// 		}
	// 		a.sort((a, b) => a - b);
	// 		if (st.direction > 0) {
	// 			for (i = 0; i < a.length; i++) {
	// 				if (a[i] >= value) {
	// 					return a[i];
	// 				}
	// 			}
	// 			return a.pop();
	// 		} else {
	// 			i = a.length;
	// 			while (i--) {
	// 				if (a[i] <= value) {
	// 					return a[i];
	// 				}
	// 			}
	// 		}
	// 		return a[0];
	// 	};
	// }
};

export default initSmoothHorizontalScroll;

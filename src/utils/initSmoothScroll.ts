import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// this is the helper function that sets it all up. Pass in the content <div> and then the wrapping viewport <div> (can be the elements or selector text). It also sets the default "scroller" to the content so you don't have to do that on all your ScrollTriggers.
const initSmoothScroll = (
	content: HTMLDivElement,
	viewport?: gsap.TweenTarget,
	smoothness?: number
) => {
	gsap.registerPlugin(ScrollTrigger);
	// content = gsap.utils.toArray(content)[0];
	smoothness = smoothness || 1;

	gsap.set(viewport || content.parentNode, {
		overflow: "hidden",
		position: "fixed",
		height: "100%",
		width: "100%",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	});
	gsap.set(content, { overflow: "visible", width: "100%" });

	let getProp = gsap.getProperty(content),
		setProp = gsap.quickSetter(content, "y", "px"),
		setScroll = ScrollTrigger.getScrollFunc(window, true),
		removeScroll = () => (content.style.overflow = "visible"),
		killScrub = (trigger: ScrollTrigger) => {
			let scrub = trigger.getTween();
			scrub && scrub.kill();
			trigger.animation?.progress(trigger.progress);
		},
		height: number,
		isProxyScrolling: boolean;

	function onResize() {
		height = content.clientHeight;
		content.style.overflow = "visible";
		document.body.style.height = height + "px";
	}
	onResize();
	ScrollTrigger.addEventListener("refreshInit", onResize);
	ScrollTrigger.addEventListener("refresh", () => {
		removeScroll();
		requestAnimationFrame(removeScroll);
	});
	ScrollTrigger.defaults({ scroller: content });

	ScrollTrigger.scrollerProxy(content, {
		scrollTop(value) {
			if (arguments.length) {
				isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
				setProp(-(value || 0));
				setScroll(value || 0);
				return;
			}
			return -getProp("y");
		},
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
		},
	});

	return ScrollTrigger.create({
		animation: gsap.fromTo(
			content,
			{ y: 0 },
			{
				y: () => document.documentElement.clientHeight - height,
				ease: "none",
				onUpdate: ScrollTrigger.update,
			}
		),
		scroller: window,
		invalidateOnRefresh: true,
		start: 0,
		end: () => height - document.documentElement.clientHeight,
		scrub: smoothness,
		onUpdate: (self) => {
			if (isProxyScrolling) {
				killScrub(self);
				isProxyScrolling = false;
			}
		},
		onRefresh: killScrub, // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
	});
};

export default initSmoothScroll;

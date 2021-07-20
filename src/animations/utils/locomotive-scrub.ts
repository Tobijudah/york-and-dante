const locomotiveScrub = (scroll: any, scrollID: string, progress: number, tl: gsap.core.Timeline) => {
	scroll.on("scroll", (args: any) => {
		if (typeof args.currentElements[scrollID] === "object") {
			progress = args.currentElements[scrollID].progress;
			tl.progress(progress).play();
			tl.pause();
		}
	});
};

export default locomotiveScrub;

import { useEffect, useState } from "react";

const useIntersectionObserver = (
	ref: React.MutableRefObject<HTMLElement | null>,
	threshold: number
) => {
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

	useEffect(() => {
		const intersectionObserver = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting ?? false);
			},
			{
				threshold,
			}
		);
		const currentRef = ref.current;
		if (currentRef) {
			intersectionObserver.observe(currentRef);
		}
		return () => {
			if (currentRef) {
				intersectionObserver.unobserve(currentRef);
			}
		};
	}, [ref]);

	return isIntersecting;
};

export default useIntersectionObserver;

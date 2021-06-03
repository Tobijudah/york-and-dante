import gsap from "gsap";
gsap.config({
	force3D: true,
});

const AlphabetsAnimation = (
	element: gsap.TweenTarget,
	letter: string,
	index: string
) => {
	const indexNumber = Number(index);
	const letterNumber = Number(letter);
	gsap.to(element, {
		delay: 0.2 * indexNumber,
		duration: letterNumber < 6 ? 0.3 * letterNumber : 0.1 * letterNumber,
		transform: `translateY(${-7.2267 * letterNumber}vh)`,
	});
};

export default AlphabetsAnimation;

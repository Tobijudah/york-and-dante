import React, { SVGProps } from "react";

type LongLineProps = {
	windowWidth: number;
};

export const LongLine = React.forwardRef<
	SVGSVGElement,
	SVGProps<SVGSVGElement> & LongLineProps
>(({ windowWidth, ...props }, ref) => {
	return (
		<svg
			ref={ref}
			fill="none"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
		>
			{windowWidth > 1024 ? (
				<line
					x1="0.5"
					x2="0.500032"
					y1="81.111vh"
					stroke="white"
					y2="-2.18557e-08"
				/>
			) : (
				<line
					y1="0.5"
					y2="0.5"
					stroke="white"
					x2="calc(100vw - 3rem)"
				/>
			)}
		</svg>
	);
});

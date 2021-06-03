import { createRef, useEffect, useState } from "react";

const useRefArray = (length: number) => {
	const [refs, setRefs] = useState<React.MutableRefObject<HTMLDivElement>[]>([]);

	useEffect(() => {
		setRefs((refs) =>
			Array(length)
				.fill(0)
				.map((_, i) => refs[i] || createRef<HTMLDivElement>())
		);
	}, [length]);
	return refs;
};

export default useRefArray;

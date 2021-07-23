import { useRef, useState } from "react";

function useStateRef<S>(value: S) {
	const [state, setState] = useState(value);
	const ref = useRef<S>(state);

	const setStateRef = (value: S) => {
		setState(value);
		ref.current = value;
	};

	return { ref, state, setStateRef };
}

export default useStateRef;

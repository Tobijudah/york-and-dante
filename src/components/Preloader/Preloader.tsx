import S from "./Preloader.module.scss";
import React, { useEffect } from "react";
import Alphabets from "../Alphabets/Alphabets";
import useRefArray from "../../hooks/useRefArray";
import AlphabetsAnimation from "../../animations/alphabets";

const Preloader = () => {
	const letterRefs = useRefArray(7);

	useEffect(() => {
		const preload = () => {
			letterRefs &&
				letterRefs.forEach((ref) => {
					AlphabetsAnimation(
						ref.current,
						ref.current.getAttribute("data-letter")!,
						ref.current.getAttribute("data-index")!
					);
				});
		};
		window.addEventListener('resize', preload);
		setTimeout(() => {
			preload();
		}, 1500);
	}, [letterRefs]);

	return (
		<div className={S.preloader}>
			<div className={S.barn}>
				<div className={S.letter}>
					<Alphabets
						dataIndex={1}
						letterIndex={2}
						ref={letterRefs[0]}
					/>
				</div>
				<div className={S.letter}>
					<Alphabets
						dataIndex={2}
						letterIndex={1}
						ref={letterRefs[1]}
					/>
				</div>
				<div className={S.letter}>
					<Alphabets
						dataIndex={3}
						letterIndex={18}
						ref={letterRefs[2]}
					/>
				</div>
				<div className={S.letter}>
					<Alphabets
						dataIndex={4}
						letterIndex={14}
						ref={letterRefs[3]}
					/>
				</div>
			</div>
			<p className={S.and}>&</p>
			<div className={S.bed}>
				<div className={S.letter}>
					<Alphabets
						dataIndex={5}
						letterIndex={2}
						ref={letterRefs[4]}
					/>
				</div>
				<div className={S.letter}>
					<Alphabets
						dataIndex={6}
						letterIndex={5}
						ref={letterRefs[5]}
					/>
				</div>
				<div className={S.letter}>
					<Alphabets
						dataIndex={7}
						letterIndex={4}
						ref={letterRefs[6]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Preloader;

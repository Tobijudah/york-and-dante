import S from "./Preloader.module.scss";
import Alphabets from "../Alphabets/Alphabets";
import React, { useEffect, useRef } from "react";
import useRefArray from "../../hooks/useRefArray";
import FadeOutAnimation from "../../animations/fade-out";
import AlphabetsAnimation from "../../animations/alphabets";
import PreloaderAnimation from "../../animations/preloader";

type PreloaderProps = {
	setPreloaded: React.Dispatch<React.SetStateAction<boolean>>;
};

const Preloader = ({ setPreloaded }: PreloaderProps) => {
	const wordRef = useRef(null);
	const letterRefs = useRefArray(7);
	const preloaderRef = useRef(null);
	const preloaderBgRef = useRef(null);
	const preloaderContainerRef = useRef(null);

	useEffect(() => {
		const preload = () => {
			const preloaderDuration = PreloaderAnimation([
				preloaderRef.current,
				wordRef.current,
				preloaderBgRef.current,
			]);
			let alphabetsDuration: number | undefined;
			letterRefs &&
				letterRefs.forEach((ref) => {
					alphabetsDuration = AlphabetsAnimation(
						preloaderDuration,
						ref.current,
						ref.current.getAttribute("data-letter")!,
						ref.current.getAttribute("data-index")!
					);
				});
			if (!!alphabetsDuration) {
				FadeOutAnimation(
					alphabetsDuration + preloaderDuration,
					preloaderContainerRef.current,
					() => setPreloaded(true)
				);
			}
		};
		window.addEventListener("resize", preload);
		setTimeout(() => {
			preload();
		}, 1500);

		return () => window.removeEventListener("resize", preload);
	}, [letterRefs]);

	return (
		<section ref={preloaderContainerRef} className={S.preloaderContainer}>
			<div ref={preloaderRef} className={S.preloader}>
				<div ref={wordRef} className={S.word}>
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
			</div>
			<div ref={preloaderBgRef} className={S.preloaderBg}/>
		</section>
	);
};

export default Preloader;

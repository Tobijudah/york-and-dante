import S from "./Preloader.module.scss";
import Alphabets from "../Alphabets/Alphabets";
import React, { useEffect, useRef } from "react";
import useRefArray from "../../hooks/useRefArray";
import FadeOutAnimation from "../../animations/fade-out";
import AlphabetsAnimation from "../../animations/alphabets";
import PreloaderAnimation from "../../animations/preloader";

type PreloaderProps = {
	windowWidth: number;
	setPreloaded: React.Dispatch<React.SetStateAction<boolean>>;
};

const Preloader: React.FC<PreloaderProps> = ({ windowWidth, setPreloaded }) => {
	const wordRef = useRef(null);
	const letterRefs = useRefArray<HTMLDivElement>(9);
	const preloaderRef = useRef(null);
	const preloaderContainerRef = useRef(null);

	useEffect(() => {
		if (letterRefs.length === 0) return;
		const preload = () => {
			const preloaderDuration = PreloaderAnimation([
				preloaderRef.current,
				wordRef.current,
			]);
			let alphabetsDuration: number | undefined;
			letterRefs &&
				letterRefs.forEach((ref) => {
					alphabetsDuration = AlphabetsAnimation(
						preloaderDuration,
						ref.current,
						ref.current.getAttribute("data-letter")!,
						ref.current.getAttribute("data-index")!,
						windowWidth
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
		setTimeout(() => {
			preload();
		}, 1500);
	}, [letterRefs]);

	return (
		<section ref={preloaderContainerRef} className={S.preloaderContainer}>
			<div ref={preloaderRef} className={S.preloader}>
				<div ref={wordRef} className={S.word}>
					<div className={S.york}>
						<div className={S.letter}>
							<Alphabets
								dataIndex={1}
								letterIndex={25}
								ref={letterRefs[0]}
							/>
						</div>
						<div className={S.letter}>
							<Alphabets
								dataIndex={2}
								letterIndex={15}
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
								letterIndex={11}
								ref={letterRefs[3]}
							/>
						</div>
					</div>
					<p className={S.and}>&</p>
					<div className={S.dante}>
						<div className={S.letter}>
							<Alphabets
								dataIndex={5}
								letterIndex={4}
								ref={letterRefs[4]}
							/>
						</div>
						<div className={S.letter}>
							<Alphabets
								dataIndex={6}
								letterIndex={1}
								ref={letterRefs[5]}
							/>
						</div>
						<div className={S.letter}>
							<Alphabets
								dataIndex={7}
								letterIndex={14}
								ref={letterRefs[6]}
							/>
						</div>
						<div className={S.letter}>
							<Alphabets
								dataIndex={6}
								letterIndex={20}
								ref={letterRefs[7]}
							/>
						</div>
						<div className={S.letter}>
							<Alphabets
								dataIndex={9}
								letterIndex={5}
								ref={letterRefs[8]}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Preloader;

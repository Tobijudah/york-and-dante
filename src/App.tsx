import React from "react";
import S from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import video from './videos/home.mp4'

function App() {
	return (
		<>
			<Nav />
			<div className={S.app} data-scroll-container>
				<section className={S.home}>
					<div className={S.videoWrapper}>
						<video
							loop
							muted
							autoPlay
							src={video}
							className={S.video}
						></video>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;

import S from "./App.module.scss";
import Home from "./pages/Home/Home";
import "splitting/dist/splitting.css";
import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Preloader from "./components/Preloader/Preloader";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

function App() {
	const [open, setOpen] = useState<boolean>(false);
	const [preloaded, setPreloaded] = useState<boolean>(false);

	return (
		<main className={S.app}>
			{!preloaded && <Preloader setPreloaded={setPreloaded} />}
			<Menu open={open} setOpen={setOpen} preloaded={preloaded} />
			<Home navOnClick={() => setOpen(!open)} preloaded={preloaded} />
		</main>
	);
}

export default App;

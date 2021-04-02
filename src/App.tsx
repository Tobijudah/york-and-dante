import React from "react";
import S from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import SectionOne from "./components/SectionOne/SectionOne";

function App() {
	return (
		<>
			<Nav />
			<Cart />
			<div className={S.app} data-scroll-container>
				<SectionOne />
			</div>
		</>
	);
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { AllCharacters } from "./views/all-components/AllCharacters.jsx";
import { AllPlanets } from "./views/all-components/AllPlanets.jsx";
import { AllSpecies } from "./views/all-components/AllSpecies.jsx";
import { AllStarships } from "./views/all-components/AllStarships.jsx";
import { AllVehicles } from "./views/all-components/AllVehicles.jsx";
import { Information } from "./views/Information.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/AllCharacters" element={<AllCharacters />} />
						<Route path="/AllPlanets" element={<AllPlanets />} />
						<Route path="/AllSpecies" element={<AllSpecies />} />
						<Route path="/AllStarships" element={<AllStarships />} />
						<Route path="/AllVehicles" element={<AllVehicles />} />
						<Route path="/Information/:thecomponent/:theid" element={<Information />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

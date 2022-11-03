import React from "react";
import Banner from "../Components/Banner";
import Footer from "../layout/Footer";
import Famousesay from "../Components/Famousesay";
import HomeList from "../layout/HomeList";

function Main() {
	return (
		<>
			<Banner />
			<Famousesay />
			<HomeList />
		</>
	);
}

export default Main;

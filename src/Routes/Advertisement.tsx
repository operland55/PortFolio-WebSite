import React from "react";
import Header from "../Components/Header";
import AdvertisementScreen from "../layout/AdvertisementScreen";
import Footer from "../layout/Footer";

function Advertisement() {
	return (
		<>
			<div className="sm-hidden">
				<Header />
			</div>
			<AdvertisementScreen />
			<div className="sm-hidden">
				<Footer />
			</div>
		</>
	);
}

export default Advertisement;

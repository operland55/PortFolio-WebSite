import React from "react";
import Header from "../Components/Header";
import FavoriteList from "../layout/FavoriteList";
import Footer from "../layout/Footer";

function FavoriteGroup() {
	return (
		<>
			<div className="md-only">
				<Header />
			</div>
			<FavoriteList />
			<div className="md-only">
				<Footer />
			</div>
		</>
	);
}

export default FavoriteGroup;

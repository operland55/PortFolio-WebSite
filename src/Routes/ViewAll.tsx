import React from "react";
import Header from "../Components/Header";
import ViewAllPage from "../layout/ViewAllPage";

function ViewAll() {
	return (
		<>
			<div className="sm-hidden">
				<Header />
			</div>
			<ViewAllPage />
		</>
	);
}

export default ViewAll;

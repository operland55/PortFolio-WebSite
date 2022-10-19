import React from "react";
import { useParams } from "react-router-dom";

function ContentsDetail() {
	let { DetailId } = useParams();
	console.log("asd", DetailId);
	return (
		<>
			<h1>{DetailId}</h1>
		</>
	);
}

export default ContentsDetail;

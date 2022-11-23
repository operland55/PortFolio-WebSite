import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCastMovie, ICredits } from "../../api";
import { makeImagePath } from "../../utils";

function DetailCharacter() {
	let { DetailId } = useParams();
	const { data: dataCast, isLoading: CastLoading } = useQuery<ICredits>(
		"CastData",
		() => {
			return getCastMovie(DetailId);
		}
	);

	return <></>;
}

export default DetailCharacter;

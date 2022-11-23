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

	return (
		<ul className="Character-container">
			{dataCast?.cast.slice(0, 10).map((item: any, key: number) => (
				<li key={key}>
					<div className="Character-imgBox">
						<img src={makeImagePath(`./${item.profile_path}`)} alt="" />
					</div>

					<div className="Character-info">
						<p>{item.name}</p>
						<p>{item.character}</p>
					</div>
				</li>
			))}
		</ul>
	);
}

export default DetailCharacter;

import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCastMovie, Icredits, IImg } from "../../api";
import { makeImagePath } from "../../utils";

function DetailCharacter() {
	let { DetailId } = useParams();
	const { data: dataCast, isLoading: CastLoading } = useQuery<Icredits>(
		"CastData",
		() => {
			return getCastMovie(DetailId);
		}
	);

	return (
		<ul className="Character-container">
			{dataCast?.cast.slice(0, 10).map((item: any, key) => (
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

import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IGetResult } from "../../api";
import { makeImagePath } from "../../utils";

function DetailTvSimilar({ id }: any) {
	const [data, setData] = useState<IGetResult>();
	const [isLoading, setIsLoading] = useState(true);

	let navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);

		(async () => {
			const response = await fetch(
				`https://api.themoviedb.org/3/tv/${id}/similar?api_key=bb50b072ab393b23b85d0c258de3c425&language=en-US&page=1`
			);
			const json = await response.json();
			setData(json);
			setIsLoading(false);
		})();
	}, [id]);

	console.log("data", data);
	return (
		<ul className="detail-lists">
			{data?.results.slice(0, 10).map((item: any, key: any) => (
				<li
					key={key}
					onClick={() => {
						navigate(`/ContentsTv/${item.id}`);
					}}
				>
					<div className="img-box">
						<img src={makeImagePath(`./${item.backdrop_path}`)} alt="" />
					</div>

					<div className="detail-lists-info">
						<p className="title">{item.name}</p>
						<p className="release">{item.first_air_date}</p>
					</div>
				</li>
			))}
		</ul>
	);
}

export default DetailTvSimilar;

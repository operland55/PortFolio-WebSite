import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getSimilarMovies, IGetDetailMovie, IGetResult } from "../../api";
import { makeImagePath } from "../../utils";

function DetailSimilar({ id }: any) {
	const [data, setData] = useState<IGetResult>();
	const [isLoading, setIsLoading] = useState(true);

	let navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);

		(async () => {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${id}/similar?api_key=bb50b072ab393b23b85d0c258de3c425&language=en-US&page=1`
			);
			const json = await response.json();
			setData(json);
			setIsLoading(false);
		})();
	}, [id]);

	return (
		<ul className="detail-lists">
			{data?.results.slice(0, 10).map((item: any, key: any) => (
				<li
					key={key}
					onClick={() => {
						navigate(`/ContentsMovie/${item.id}`);
						window.scrollTo(0, 0);
					}}
				>
					<div className="img-box">
						<img src={makeImagePath(`./${item.backdrop_path}`)} alt="" />
					</div>

					<div className="detail-lists-info">
						<p className="title">{item.title}</p>
						<p className="release">{item.release_date}</p>
					</div>
				</li>
			))}
		</ul>
	);
}

export default DetailSimilar;

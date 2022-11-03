import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { makeImagePath } from "../../utils";

function DetailSimilar({ data }: any) {
	let navigate = useNavigate();

	console.log(data);
	return (
		<ul className="detail-lists">
			{data?.results.slice(0, 10).map((item: any, key: any) => (
				<li
					key={key}
					onClick={() => {
						navigate(`/ContentsMovie/${item.id}`);
						location.reload();
					}}
				>
					<div className="img-box">
						<img src={makeImagePath(item.backdrop_path)} alt="" />
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

export default DetailSimilar;

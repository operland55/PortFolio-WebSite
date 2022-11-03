import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { makeImagePath } from "../../utils";

function DetailSimilar({ data }: any) {
	let navigate = useNavigate();

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
						<p className="title">{item.title}</p>
						<p className="release">{item.release_date}</p>
					</div>
				</li>
			))}
		</ul>
	);
}

export default DetailSimilar;

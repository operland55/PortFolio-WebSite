import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getSimilarTv } from "../../api";
import { Data } from "../HomeListCards";
import DetailTvImg from "./DetailTvImg";
import DetailTvReview from "./DetailTvReview";
import DetailTvCharacter from "./DetailTvCharacter";
import DetailTvSimilar from "./DetailTvSimilar";
function DetailTvList({ data, isLoading, id, genre }: Data) {
	const { data: similarData, isLoading: similarDataLoading } = useQuery(
		"similarTv",
		() => {
			return getSimilarTv(id);
		}
	);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [value, setValue] = useState("similar");
	const valueBtn = (e: any) => {
		setValue((cur) => (cur = e.target.value));
	};
	return (
		<div className="detailContainer">
			<div className="detailWrapper">
				<ul className="detail-nav">
					<li className={value == "similar" ? "active" : undefined}>
						<button onClick={valueBtn} value="similar">
							Similar
						</button>
					</li>
					<li className={value == "Review" ? "active" : undefined}>
						<button onClick={valueBtn} value="Review">
							Review
						</button>
					</li>
					<li className={value == "Character" ? "active" : undefined}>
						<button onClick={valueBtn} value="Character">
							Character
						</button>
					</li>
					<li className={value == "officialImg" ? "active" : undefined}>
						<button onClick={valueBtn} value="officialImg">
							officialImg
						</button>
					</li>
				</ul>

				{value == "similar" ? (
					<div className="detail-similar-container">
						<div className="detail-similar">
							<div>
								<p>Similar movie</p>
							</div>
							<div className="detail-sort">
								<button>Release_data</button>
								<button>by Popularity</button>
							</div>
						</div>

						<DetailTvSimilar id={id} />
					</div>
				) : value == "Review" ? (
					<DetailTvReview />
				) : value == "officialImg" ? (
					<DetailTvImg />
				) : value == "Character" ? (
					<DetailTvCharacter />
				) : null}
			</div>

			<div className="detail-info">
				<div className="detail-overview">
					<h2>Overview</h2>
					<p>{data?.overview}</p>
				</div>

				<div className="detail-produce">
					<h2>Produce Info</h2>
					<p>Runtime : {(data?.runtime / 60).toFixed(2)}min</p>
					<p>Renewed : {data?.release_date}</p>
					<p>Spoken_languages : {data?.spoken_languages[0]?.name} </p>
					<p>Revenue : {data?.revenue}</p>
				</div>

				<div className="detail-genre">
					<h2>Tag</h2>
					{data?.genres.map((i: any, key: number) => (
						<span key={key}>#{i.name}</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default DetailTvList;

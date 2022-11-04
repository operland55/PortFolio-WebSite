import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getReviewMovie, IReview } from "../../api";
import { makeImagePath } from "../../utils";

function DetailReview() {
	let { DetailId } = useParams();
	let [add, setAdd] = useState(false);
	let [addIndex, setAddIndex] = useState(100000000);
	const { data: reviewData, isLoading: reviewLoading } = useQuery<IReview>(
		"reviewData",
		() => {
			return getReviewMovie(DetailId);
		}
	);

	return (
		<ul className="review-container">
			{reviewData?.results.map((item, key) => (
				<li key={key}>
					<div className="avatar">
						<img
							src={makeImagePath(`./${item.author_details.avatar_path}`)}
							alt=""
						/>
					</div>

					<div className="avatar-info">
						<p className="avatar-name">{item.author_details.name}</p>
						<p className="avatar-content">
							{addIndex == key ? item.content : item.content.slice(0, 200)}
						</p>

						<p>{item.updated_at.slice(0, 10)}</p>
						<button
							onClick={() => {
								setAdd((cur) => !cur), setAddIndex((cur) => (cur = key));
							}}
						>
							{addIndex == key ? "Reduce Word" : "Add Look"}
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default DetailReview;

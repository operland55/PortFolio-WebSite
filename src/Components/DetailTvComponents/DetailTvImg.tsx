import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCastMovie, getImgMovie, getImgTv, ICredits, IImg } from "../../api";
import { makeImagePath } from "../../utils";

function DetailTvImg() {
	let { DetailId } = useParams();
	const { data: ImgData, isLoading: ImgLoading } = useQuery("imgData", () => {
		return getImgTv(DetailId || "");
	});

	return (
		<ul className="detailImg-container">
			<li>
				<img
					src={makeImagePath(`./${ImgData?.backdrops[1]?.file_path}`)}
					alt="backdrop"
				/>
			</li>
			<li>
				<img
					src={makeImagePath(`./${ImgData?.posters[1]?.file_path}`)}
					alt="Poster"
				/>
			</li>
			<li>
				<img
					src={makeImagePath(`./${ImgData?.posters[2]?.file_path}`)}
					alt="Poster"
				/>
			</li>
		</ul>
	);
}

export default DetailTvImg;

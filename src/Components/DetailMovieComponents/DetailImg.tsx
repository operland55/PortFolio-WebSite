import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getImgMovie } from "../../api";
import { makeImagePath } from "../../utils";

function DetailImg() {
	let { DetailId } = useParams();
	const { data: ImgData, isLoading: ImgLoading } = useQuery("imgData", () => {
		return getImgMovie(DetailId || "");
	});

	return (
		<ul className="detailImg-container">
			<li>
				<img
					src={makeImagePath(`./${ImgData?.backdrops[1]?.file_path}`)}
					alt=""
				/>
			</li>
			<li>
				<img
					src={makeImagePath(`./${ImgData?.posters[0]?.file_path}`)}
					alt=""
				/>
			</li>
			<li>
				<img
					src={makeImagePath(`./${ImgData?.posters[1]?.file_path}`)}
					alt=""
				/>
			</li>
		</ul>
	);
}

export default DetailImg;

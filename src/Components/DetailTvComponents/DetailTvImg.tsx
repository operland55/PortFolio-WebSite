import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCastMovie, getImgMovie, getImgTv, Icredits, IImg } from "../../api";
import { makeImagePath } from "../../utils";

function DetailTvImg() {
	let { DetailId } = useParams();
	const { data: Imgdata, isLoading: ImgLoading } = useQuery("imgData", () => {
		return getImgTv(DetailId || "");
	});

	console.log(Imgdata);
	return (
		<ul className="detailImg-container">
			<li>
				<img src={makeImagePath(Imgdata?.backdrops[1]?.file_path)} alt="" />
			</li>
			<li>
				<img src={makeImagePath(Imgdata?.posters[1]?.file_path)} alt="" />
			</li>
			<li>
				<img src={makeImagePath(Imgdata?.posters[2]?.file_path)} alt="" />
			</li>
		</ul>
	);
}

export default DetailTvImg;

import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getVideoMovie, getVideoTv } from "../api";
import YouTube from "react-youtube";
import { useRecoilState, useSetRecoilState } from "recoil";
import { VideoToggle } from "../atom";
import { AiOutlineClose } from "react-icons/ai";

function Previewtv() {
	const setVideoBtn = useSetRecoilState(VideoToggle);
	let { DetailId } = useParams();
	const { data, isLoading } = useQuery("TvData", () => {
		return getVideoTv(DetailId || "");
	});
	return (
		<div className="overlay">
			<div
				className="close-icon"
				onClick={() => {
					setVideoBtn((cur) => !cur);
				}}
			>
				<AiOutlineClose />
			</div>
			<YouTube
				videoId={data?.results[0]?.key}
				title={data?.results[0].name}
				className="video"
				opts={{
					width: "1100",
					height: "555",
					playerVars: {
						autoplay: 1, //자동재생 O
						rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
						modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
					},
				}}
			></YouTube>
		</div>
	);
}

export default Previewtv;

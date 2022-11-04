import React from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
	getDetailMovie,
	getDetailTV,
	getGenreId,
	IGetDetailMovie,
} from "../api";
import { makeImagePath } from "../utils";
import { AiOutlineArrowLeft, AiOutlineHeart } from "react-icons/ai";
import { VideoToggle } from "../atom";
import { useRecoilState } from "recoil";
import Header from "../Components/Header";
import Footer from "./Footer";
import DetailList from "../Components/DetaiMovielComponents/DetailList";
import DetailTvList from "../Components/DetailTvComponents/DetailTvList";
import Previewtv from "../Components/Previewtv";

function ContentsTvDetail() {
	let { DetailId } = useParams();
	const [videoBtn, setVideoBtn] = useRecoilState(VideoToggle);
	const { data, isLoading } = useQuery("TvDetail", () => {
		return getDetailTV(DetailId);
	});
	const { data: genre, isLoading: genreLoading } = useQuery(
		"GenreId",
		getGenreId
	);
	let navigate = useNavigate();
	const videoPlay = () => {
		setVideoBtn((cur) => !cur);
	};

	return (
		<>
			<div className="sm-hidden">
				<Header />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="contents">
							<div className="contents-PosterContent">
								{videoBtn ? <Previewtv /> : null}
								<div className="poster">
									<div className="contents-thumbnail-group">
										<div className="contents-thumbnail-img">
											<img
												src={makeImagePath(`./${data?.poster_path}`)}
												alt="backdrop-img"
											/>
										</div>

										<div className="contents-info">
											<div className="contents-info-a">
												<p>
													{data?.adult ? "adult" : "All users"} /
													<span>language: {data?.original_language}</span>
												</p>

												<h1>{data?.name}</h1>
											</div>

											<div>
												<div className="genre">
													{data?.genres.map((i: any, key: number) => (
														<p key={key}>{i.name}</p>
													))}
												</div>

												<div className="score">
													average: {data?.vote_average.toFixed(2)}
												</div>
											</div>
										</div>

										<div className="contents-header">
											<div
												className="contents-back sm-only"
												onClick={() => {
													navigate(-1);
												}}
											>
												<AiOutlineArrowLeft />
											</div>

											<div className="contents-love">
												<AiOutlineHeart />
											</div>
										</div>
									</div>
								</div>

								<div className="blur">
									<img
										src={makeImagePath(`./${data?.backdrop_path || ""}`)}
										alt="img"
									/>
								</div>
							</div>

							<div className="contents-video" onClick={videoPlay}>
								<button>Preview</button>
							</div>

							<DetailTvList
								data={data}
								isLoading={isLoading}
								id={DetailId}
								genre={genre}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="sm-hidden">
				<Footer />
			</div>
		</>
	);
}

export default ContentsTvDetail;

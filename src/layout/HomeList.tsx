import React, { useEffect, useMemo } from "react";
import { useQueries, useQuery } from "react-query";
import {
	getMovies,
	getSimilarMovies,
	getTopTv,
	getUpComingMovie,
	IGetResult,
} from "../api";
import { Link } from "react-router-dom";
import {
	AiOutlineArrowRight,
	AiOutlineArrowLeft,
	AiFillPicture,
} from "react-icons/ai";
import HomeListrecommend from "./HomeListrecommend";
import HomeListBox from "../Components/HomeListComponets/HomeListBox";
import HomeListCards from "../Components/HomeListComponets/HomeListCards";

function List() {
	const result = useQueries([
		{
			queryKey: ["TopTv"],
			queryFn: getTopTv,
		},
		{
			queryKey: ["TopMovies"],
			queryFn: getMovies,
		},
		{
			queryKey: ["upcoming"],
			queryFn: getUpComingMovie,
		},
		{
			queryKey: ["MysTerySimilarMovie"],
			queryFn: () => getSimilarMovies(760104),
		},
		{
			queryKey: ["RomanceSimilarMovie"],
			queryFn: () => getSimilarMovies(614939),
		},
		{
			queryKey: ["MusicSimilarMovie"],
			queryFn: () => getSimilarMovies(610150),
		},
		{
			queryKey: ["FamilyMovie"],
			queryFn: () => getSimilarMovies(830784),
		},
		{
			queryKey: ["ActionMovie"],
			queryFn: () => getSimilarMovies(870096),
		},
		{
			queryKey: ["AdventureMovie"],
			queryFn: () => getSimilarMovies(1878),
		},
	]);
	const loading = result.some((result) => result.isLoading);

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="list-container">
						<div className="list-box">
							<h2 className="list-title">Top-Rated</h2>

							<div className="list-explanation">
								<div className="list-name">
									<p className="list-theme">Theme</p>
									<span>The best Tv goes like this</span>
								</div>

								<div className="list-view">
									<Link to="/viewall">View More</Link>
								</div>
							</div>

							<HomeListCards data={result[0].data} isLoading={loading} />
						</div>
					</div>
					<div className="list-container">
						<div className="list-box">
							<h2 className="list-title">Top-Rated</h2>

							<div className="list-explanation">
								<div className="list-name">
									<p className="list-theme">Theme</p>
									<span>The best movie goes like this</span>
								</div>

								<div className="list-view">
									<Link to="/viewall">View More</Link>
								</div>
							</div>

							<HomeListCards data={result[1].data} isLoading={loading} />
						</div>{" "}
					</div>
					<div className="list-container">
						<div className="list-box">
							<h2 className="list-title">UpComing</h2>

							<div className="list-explanation">
								<div className="list-name">
									<p className="list-theme">Theme</p>
									<span>Latest work available soon</span>
								</div>

								<div className="list-view">
									<Link to="/viewall">View More</Link>
								</div>
							</div>

							<HomeListCards data={result[2].data} isLoading={loading} />
						</div>{" "}
					</div>
					<div className="list-container">
						<div className="list-box">
							<h2 className="list-title">Romance</h2>

							<div className="list-explanation">
								<div className="list-name">
									<p className="list-theme">Theme</p>
									<span>I need romance ♥</span>
								</div>

								<div className="list-view">
									<Link to="/viewall">View More</Link>
								</div>
							</div>
							<HomeListrecommend data={result[4].data} isLoading={loading} />
						</div>
					</div>
					<div className="list-container">
						<div className="list-box">
							<h2 className="list-title">Animation & Comic</h2>

							<div className="list-explanation">
								<div className="list-name">
									<p className="list-theme">Theme</p>
									<span>see you with my family</span>
								</div>

								<div className="list-view">
									<Link to="/viewall">View More</Link>
								</div>
							</div>
							<HomeListBox data={result[5].data} isLoading={loading} />
						</div>
					</div>
					<div className="list-container">
						<div className="list-box">
							<h2 className="list-title">Mystery</h2>

							<div className="list-explanation">
								<div className="list-name">
									<p className="list-theme">Theme</p>
									<span>Watch this if you don't want to sleep</span>
								</div>

								<div className="list-view">
									<Link to="/viewall">View More</Link>
								</div>
							</div>
							<HomeListrecommend data={result[3].data} isLoading={loading} />
						</div>
					</div>
					<div className="list-container">
						<div className="list-box">
							<h2 className="list-title">Family</h2>

							<div className="list-explanation">
								<div className="list-name">
									<p className="list-theme">Theme</p>
									<span>heart warming #Family drama</span>
								</div>

								<div className="list-view">
									<Link to="/viewall">View More</Link>
								</div>
							</div>

							<HomeListCards data={result[6].data} isLoading={loading} />
						</div>
					</div>
					<div className="list-container">
						<div className="list-box">
							<h2 className="list-title">Action</h2>

							<div className="list-explanation">
								<div className="list-name">
									<p className="list-theme">Theme</p>
									<span>I can't live without action</span>
								</div>

								<div className="list-view">
									<Link to="/viewall">View More</Link>
								</div>
							</div>

							<HomeListCards data={result[7].data} isLoading={loading} />
						</div>
					</div>
					<div className="list-container">
						<div className="list-box">
							<h2 className="list-title">Adventure</h2>

							<div className="list-explanation">
								<div className="list-name">
									<p className="list-theme">Theme</p>
									<span>If you want an adventure, check this out</span>
								</div>

								<div className="list-view">
									<Link to="/viewall">View More</Link>
								</div>
							</div>
							<HomeListBox data={result[8].data} isLoading={loading} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default List;

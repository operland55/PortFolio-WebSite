import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
import { ImTv } from "react-icons/im";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { API_KEY, BASE_PATH, IGetResult } from "../api";
import { makeImagePath } from "../utils";
import { MenuToggle } from "../atom";
import { useRecoilState } from "recoil";
import Menu from "../Components/Menu";
function ViewAllPage() {
	const [num, setNum] = useState(1);
	const [genre, setGenre] = useState("movie");
	const [data, setData] = useState<IGetResult[]>();
	const [menuBtn, setMenuBtn] = useRecoilState(MenuToggle);
	const navigate = useNavigate();

	const genreBtn = (e: string) => {
		window.scrollTo(0, 0);
		setNum(1);
		setGenre((cur) => (cur = e));
	};

	const nextBtn = () => {
		if (num == 20) {
			setNum(1);
		} else {
			setNum(num + 1);
		}
	};
	const prevBtn = () => {
		if (num == 1) {
			setNum(20);
		} else {
			setNum(num - 1);
		}
	};
	useEffect(() => {
		(async () => {
			if (genre == "movie") {
				const response = await fetch(
					`${BASE_PATH}/${genre}/now_playing?api_key=${API_KEY}&language=en-US&page=${num}`
				);
				const json = await response.json();
				setData(json.results);
			} else {
				const response = await fetch(
					`${BASE_PATH}/${genre}/top_rated?api_key=${API_KEY}&language=en-US&page=${num}`
				);
				const json = await response.json();
				setData(json.results);
			}
		})();
	}, [num, genre]);
	return (
		<div className="view">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="viewAllContainer">
							<header className="viewall-header sm-only">
								<div
									className="header-img"
									onClick={() => {
										navigate("/");
									}}
								>
									<img src={Logo} alt="logo" />
								</div>

								<h1>View All</h1>

								<div className="header-icon">
									<BsSearch
										onClick={() => {
											navigate("/search");
										}}
									/>
									<BiMenu
										onClick={() => {
											setMenuBtn((cur) => !cur);
										}}
									/>
								</div>
							</header>
							<div className="title">
								<h1>{genre.toUpperCase()}</h1>
								<div className="genre-select sm-hidden">
									<button
										onClick={() => {
											genreBtn("movie");
										}}
									>
										Movie
									</button>
									<button
										onClick={() => {
											genreBtn("tv");
										}}
									>
										Tv
									</button>
								</div>
							</div>

							<div className="viewAll-btn">
								<button className="left-btn">
									<AiOutlineArrowLeft color="white" onClick={prevBtn} />
								</button>
								<button className="right-btn">
									<AiOutlineArrowRight color="white" onClick={nextBtn} />
								</button>
							</div>

							<main className="viewall-main">
								<ul className="viewall-list">
									{data?.map((item: any, key: number) => (
										<li
											key={key}
											className="viewall-items"
											onClick={() => {
												item.first_air_date
													? navigate(`/contentsTv/${item.id}`)
													: navigate(`/contentsMovie/${item.id}`);
											}}
										>
											<div className="item-img">
												<img
													src={makeImagePath(`./${item.poster_path}`)}
													alt="poster"
												/>
											</div>

											<p>{item.title ?? item.name}</p>
										</li>
									))}
								</ul>
							</main>

							<footer className="viewall-footer sm-only">
								<ul>
									<li>
										<MdLocalMovies
											onClick={() => {
												genreBtn("movie");
											}}
										/>
										<p>Movie</p>
									</li>
									<li>
										<ImTv
											onClick={() => {
												genreBtn("tv");
											}}
										/>
										<p>Tv</p>
									</li>
								</ul>
							</footer>
						</div>
					</div>
				</div>{" "}
				{menuBtn ? <Menu /> : ""}
			</div>
		</div>
	);
}

export default ViewAllPage;

import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import NotImg from "../assets/notimg.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { InfoSearch } from "../api";
import { makeImagePath } from "../utils";

function SearchScreen() {
	const location = useLocation();
	const navigate = useNavigate();
	const keyword = useMemo(() => {
		return new URLSearchParams(location.search).get("keyword") ?? undefined;
	}, [location]);
	const { data, isLoading } = useQuery(`search-${keyword}`, () =>
		InfoSearch(keyword)
	);

	const ImgData = useMemo(() => {
		return data?.results?.filter((item: any) => item.known_for == null);
	}, [data]);

	console.log(data);
	return (
		<>
			{keyword ? (
				<p className="search-result">
					<span>{keyword}</span> There are <span>{ImgData?.length}</span>{" "}
					results for your search
				</p>
			) : null}

			<ul className="searchScreen-list">
				{ImgData?.map((item: any, key: number) => (
					<li
						className="searchScreen-list-items"
						key={key}
						onClick={() => {
							navigate(
								item.media_type == "movie"
									? `/ContentsMovie/${item.id}`
									: `/ContentsTv/${item.id}`
							);
						}}
					>
						<div className="searchScreen-item-img">
							<img
								src={
									item.poster_path == null
										? NotImg
										: makeImagePath(`./${item.poster_path}`)
								}
								alt="poster_img"
							/>

							<div className="search-info">
								<p className="media-type">{item.media_type}</p>
								<p className="title">{item.title}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default SearchScreen;

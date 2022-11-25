import React, { useMemo } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { FilterIdList, LoginId, MyList } from "../atom";
import { AiOutlineArrowLeft, AiFillHeart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Header from "../Components/Header";
import Footer from "./Footer";
import { makeImagePath } from "../utils";
import { useNavigate } from "react-router-dom";

function FavoriteList() {
	const [myList, setMyList] = useRecoilState(MyList);
	const FilterMyList = useRecoilValue(FilterIdList);

	const myId = useRecoilValue(LoginId);
	const navigate = useNavigate();

	const listDeLite = (data: any, name: string) => {
		setMyList((cur) => {
			const DeliteList = myList.filter((item) => item.id == data);
			const targetIndex = DeliteList.findIndex((item) => item.data.id == name);

			return [...cur.slice(0, targetIndex), ...cur.slice(targetIndex + 1)];
		});
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="favorite-container">
						<header className="favorite-header sm-only">
							<AiOutlineArrowLeft
								onClick={() => {
									navigate(-1);
								}}
							/>
							<p>My Lists</p>
						</header>

						<h2 className="favorite-title">My Interest Contents</h2>
						<ul className="favorite-lists">
							{FilterMyList.map((item: any, key) => (
								<li key={key} className="favorite-item">
									<div className="favorite-item-img ">
										<img
											src={makeImagePath(`./${item.data.poster_path}`)}
											alt="poster"
										/>
										<BsTrash
											onClick={() => {
												listDeLite(item.id, item.data.id);
											}}
										/>
									</div>
									<p>{item.data.name ?? item.data.title}</p>
									<AiFillHeart color="red" />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FavoriteList;

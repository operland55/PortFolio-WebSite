import React, { useEffect, useState } from "react";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { makeImagePath } from "../../utils";
export interface Data {
	data: any;
	isLoading?: boolean;
	id?: string;
	genre?: any;
}
function HomeListCards({ data, isLoading }: Data) {
	const [btnNum, setBtnNum] = useState(0);
	let widthSize = -1120;

	const NextBtn = () => {
		if (btnNum == 3) return;
		setBtnNum((cur) => cur + 1);
	};
	const PreBtn = () => {
		if (btnNum == 0) return;
		setBtnNum((cur) => cur - 1);
	};
	let liStyle = {
		transform: `translateX(${btnNum * widthSize}px)`,
	};

	return (
		<>
			<ul className="list-items">
				{isLoading ? (
					<></>
				) : (
					data?.results.map((item: any, key: number) => (
						<Link
							to={
								item.name
									? `/contentsTv/${item.id}`
									: `/ContentsMovie/${item.id}`
							}
							key={key}
						>
							<li className="list-item" style={liStyle}>
								<img src={makeImagePath(`./${item.poster_path}`)}></img>
								<div className="list-item-title">
									{item.name ? <p>{item.name}</p> : <p>{item.title}</p>}
								</div>
							</li>
						</Link>
					))
				)}
				<button className="leftBtn" onClick={PreBtn}>
					<AiOutlineArrowLeft />
				</button>
				<button className="rightBtn" onClick={NextBtn}>
					<AiOutlineArrowRight />
				</button>
			</ul>
		</>
	);
}

export default HomeListCards;

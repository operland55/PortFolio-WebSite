import React, { useEffect, useState } from "react";
import { makeImagePath } from "../utils";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
interface Data {
	data: any;
	isLoading: boolean;
}
function ListCards({ data, isLoading }: Data) {
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

	console.log(btnNum);
	return (
		<>
			<ul className="list-items">
				{isLoading ? (
					<></>
				) : (
					data?.results.map((item: any, key: any) => (
						<Link to={`/contents/${item.id}`}>
							<li key={key} className="list-item" style={liStyle}>
								<img src={makeImagePath(item.backdrop_path)}></img>
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

export default ListCards;

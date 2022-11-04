import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeImagePath } from "../utils";
import { Data } from "./HomeListCards";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function HomeListBox({ data, isLoading }: Data) {
	const [btnNum, setBtnNum] = useState(0);
	let widthSize = -1170;
	const NextBtn = (num: number) => {
		if (btnNum == num) return;
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
			<ul className="Box-lists">
				{isLoading ? (
					<></>
				) : (
					data.results.slice(0, 9).map((item: any, key: any) => (
						<Link to={`ContentsMovie/${item.id}`} key={key}>
							<li className="Box-item" style={liStyle}>
								<img src={makeImagePath(`./${item.backdrop_path}`)} alt="img" />
								<div className="Box-info">
									<p className="name">{item.title}</p>
									<p className="overview">{item.overview}</p>
								</div>
							</li>
						</Link>
					))
				)}

				<button className="leftBtn" onClick={PreBtn}>
					<AiOutlineArrowLeft />
				</button>
				<button
					className="rightBtn"
					onClick={() => {
						NextBtn(2);
					}}
				>
					<AiOutlineArrowRight />
				</button>
			</ul>
		</>
	);
}

export default HomeListBox;

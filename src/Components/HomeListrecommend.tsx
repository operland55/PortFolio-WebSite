import React from "react";
import { Link } from "react-router-dom";
import { makeImagePath } from "../utils";
import { Data } from "./ListCards";

function HomeListrecommend({ data, isLoading }: Data) {
	return (
		<div className="recommend-container">
			<Link to={`Contents/${data?.results[0].id}`}>
				<div className="recommend-firstcard">
					<img src={makeImagePath(data?.results[0].backdrop_path)} alt="" />
					<span>{data?.results[0].title}</span>
				</div>
			</Link>
			<ul className="recommend-lists">
				{isLoading ? (
					<></>
				) : (
					data?.results.slice(1, 7).map((item: any, key: any) => (
						<Link to={`Contents/${item.id}`} key={key}>
							<li className="recommend-cards">
								<img src={makeImagePath(item.backdrop_path)}></img>
								<div className="list-recommend-info">
									<span>{item.title}</span>
								</div>
							</li>
						</Link>
					))
				)}
			</ul>
		</div>
	);
}

export default HomeListrecommend;

import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FilterIdList, LoginId, MyList } from "../atom";

function FavoriteList() {
	const [myList, setMyList] = useRecoilState(FilterIdList);
	const myId = useRecoilValue(LoginId);
	// const myList = useRecoilValue(FilterIdList);

	console.log(`${myId}`, myList);
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<ul>
						{myList.map((item: any, key) => (
							<li key={key}>
								<p>{item.data.id}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default FavoriteList;

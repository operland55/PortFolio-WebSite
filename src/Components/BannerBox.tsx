import React from "react";
import { makeImagePath } from "../utils";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
interface Card {
	movie: any;
	isLoading: boolean;
	first: number;
	two: number;
}

const responsive = {
	desktop: {
		breakpoint: { max: 4000, min: 768 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 767, min: 0 },
		items: 1,
	},
};
function BannerBox({ movie, isLoading, first, two }: Card) {
	return (
		<>
			<Carousel
				swipeable={true}
				draggable={false}
				showDots={false}
				responsive={responsive}
				ssr={false} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={10000}
				keyBoardControl={true}
				customTransition="all 1000ms ease-in-out"
				arrows={false}
			>
				{isLoading ? (
					<></>
				) : (
					movie?.results.slice(first, two).map((item: any, key: any) => (
						<Link to={`Contents/${item.id}`}>
							<div className="Card-Slide" key={key}>
								<img src={makeImagePath(item.backdrop_path)}></img>
								<div className="Card-info">
									<span>{item.title}</span>
								</div>
							</div>
						</Link>
					))
				)}
			</Carousel>
		</>
	);
}

export default BannerBox;

import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMovies, getPopularMovie, IGetResult } from "../api";
import { makeImagePath } from "../utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerBox from "./BannerBox";
import { Link } from "react-router-dom";

const responsive = {
	desktop: {
		breakpoint: { max: 1024, min: 767 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 767, min: 0 },
		items: 1,
	},
};
function Banner() {
	const { data: popularMovie, isLoading: popularLoading } =
		useQuery<IGetResult>("movie", getPopularMovie);
	const { data: movies, isLoading: movieLoading } = useQuery<IGetResult>(
		"movie",
		getMovies
	);
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="banner">
						<div className="banner-screen sm-only">
							<Carousel
								swipeable={true}
								draggable={false}
								showDots={false}
								responsive={responsive}
								ssr={false} // means to render carousel on server-side.
								infinite={true}
								autoPlay={true}
								autoPlaySpeed={5000}
								keyBoardControl={true}
								customTransition="all .5"
								arrows={false}
								transitionDuration={10000}
								containerClass="carousel-container"
								dotListClass="custom-dot-list-style"
								itemClass="carousel-item-padding-40-px"
							>
								{popularLoading ? (
									<></>
								) : (
									popularMovie?.results.slice(0, 4).map((item, key) => (
										<Link to={`Contents/${item.id}`} key={key}>
											<div className="slide">
												<img src={makeImagePath(item.backdrop_path)}></img>
												<div className="info">
													<span>{item.title}</span>
												</div>
											</div>
										</Link>
									))
								)}
							</Carousel>
						</div>
						<div className="banner-desk md-only">
							<div className="BannerContainer">
								<div className="FirstCard">
									<BannerBox
										first={0}
										two={3}
										movie={movies}
										isLoading={movieLoading}
									/>
								</div>
								<div className="TwoGroupCard">
									<div className="Card">
										<BannerBox
											first={6}
											two={8}
											movie={movies}
											isLoading={movieLoading}
										/>
									</div>
									<div className="Card">
										<BannerBox
											first={9}
											two={11}
											movie={movies}
											isLoading={movieLoading}
										/>
									</div>
									<div className="Card">
										<BannerBox
											first={16}
											two={20}
											movie={movies}
											isLoading={movieLoading}
										/>
									</div>
									<div className="Card">
										<BannerBox
											first={0}
											two={3}
											movie={popularMovie}
											isLoading={popularLoading}
										/>
									</div>
								</div>
							</div>

							<div className="ThreeGroupCard">
								<div className="Card">
									<BannerBox
										first={4}
										two={6}
										movie={popularMovie}
										isLoading={popularLoading}
									/>
								</div>
								<div className="Card">
									<BannerBox
										first={6}
										two={9}
										movie={popularMovie}
										isLoading={popularLoading}
									/>
								</div>
								<div className="Card">
									<BannerBox
										first={10}
										two={12}
										movie={popularMovie}
										isLoading={popularLoading}
									/>
								</div>
								<div className="Card">
									<BannerBox
										first={13}
										two={15}
										movie={popularMovie}
										isLoading={popularLoading}
									/>
								</div>
								<div className="Card">
									<BannerBox
										first={16}
										two={19}
										movie={popularMovie}
										isLoading={popularLoading}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;

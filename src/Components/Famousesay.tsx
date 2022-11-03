import React from "react";
import Carousel from "react-multi-carousel";
import WorkCharacter from "../assets/workcharacter.png";
import Alfred from "../assets/Alfred.jpg";
import Jean from "../assets/Jean.jpg";
import Abbas from "../assets/abbas.jpg";
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
function Famousesay() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="famous-box">
						<Carousel
							responsive={responsive}
							autoPlay={true}
							autoPlaySpeed={10000}
							customTransition="all 5000ms ease-in-out"
							arrows={false}
							rewind={true}
							rewindWithAnimation={false}
						>
							<div className="famousContainer">
								<div className="famous-ImgBox">
									<img src={Alfred} alt="" />
								</div>
								<blockquote cite="Alfred Hitchcock">
									<p>A movie is a life with the boring part cut off!</p>
								</blockquote>
							</div>

							<div className="famousContainer2">
								<blockquote cite="Jean-Luc Godard">
									<p>We didn't choose the movie, the movie chose us</p>
								</blockquote>

								<div className="famous-ImgBox">
									<img src={Jean} alt="" />
								</div>
							</div>

							<div className="famousContainer3">
								<div className="famous-ImgBox">
									<img src={Abbas} alt="" />
								</div>
								<blockquote cite="Abbas Kiarostami">
									A good movie is a movie you can trust. A bad movie is an
									incredible movie
								</blockquote>
							</div>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Famousesay;

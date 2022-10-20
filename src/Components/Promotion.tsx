import React from "react";
import Carousel from "react-multi-carousel";
import WorkCharacter from "../assets/workcharacter.png";
import Logo from "../assets/logo.png";
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
function Promotion() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="promotion-box">
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
							customTransition="all 5000ms ease-in-out"
							arrows={false}
						>
							<div className="promotionContainer">
								<div className="promotion-ImgBox">
									<img src={Logo} alt="" />
								</div>
								<p>눈이오나 비가오나 구름이많거나 영화를보자!</p>
							</div>

							<div className="promotionContainer2">
								<p>합법 무료 영화 보는곳/눈비구름사이트제휴 문의</p>

								<div className="promotion-ImgBox">
									<img src={WorkCharacter} alt="" />
								</div>
							</div>

							<div className="promotionContainer3">
								<div className="promotion-ImgBox">
									<img src={WorkCharacter} alt="" />
								</div>
								<div className="promotion-phone">
									<p>홈페이지 관리 인력 채용</p>
									<a href="tel:010-5758-9884">010-5758-9884</a>
								</div>
							</div>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Promotion;

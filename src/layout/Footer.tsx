import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import { SiNotion } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { Link } from "react-router-dom";
function Footer() {
	const click = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="footer">
						<div className="footer-header">
							<div className="footer-logo" onClick={click}>
								<img src={Logo} alt="footerLogo" />
							</div>

							<ul className="footer-nav">
								<li>고객센터</li>
								<li>
									이메일 문의
									<a href="mailto:operland55@naver.com">operland55@naver.com</a>
								</li>
								<li>이용약관</li>
								<li>개인정보 처리방침</li>
							</ul>

							<ul className="footer-community">
								<li>
									<SiNotion />
								</li>
								<li>
									<SiYoutube />
								</li>
								<li>
									<SiTwitter />
								</li>
							</ul>
						</div>
						<div className="footer-bottom">
							<div className="footer-address">
								<div className="address-top">
									<p>
										(주)눈비구름 전화번호:
										<a href="tel:010-5758-9884"> 010-5758-9884</a>
									</p>
									<p>제작자:정윤재</p>
									<p>서울특별시 서초구 방배동 드림하우스</p>

									<p>통신판매업 신고번호 제 2021-서울동작-0516 호</p>
								</div>

								<div className="address-bottom">
									<p>
										(주)눈비구름 전화번호:
										<a href="tel:010-5758-9884">010-5758-9884</a>
									</p>
									<p>제작자:정윤재</p>
									<p>이메일 : operland55@naver.com</p>
									<p>서울특별시 서초구 방배동 드림하우스</p>
									<p>서울특별시 서초구 방배동 드림하우스</p>
								</div>
							</div>
							<p className="footer-produce">
								ⓒsince 2022 dk rights Co.,Ltd / SnowRainCloud korea Co.,Ltd. All
								rights Reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;

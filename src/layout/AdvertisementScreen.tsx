import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { MenuToggle } from "../atom";
import { useRecoilState } from "recoil";

function AdvertisementScreen() {
	const navigate = useNavigate();
	const [menuBtn, setMenuBtn] = useRecoilState(MenuToggle);
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<header className="Advertisement-header sm-only">
							<div
								className="header-img"
								onClick={() => {
									navigate("/");
								}}
							></div>

							<p>Advertisement/Inquiry</p>

							<div className="header-icon">
								<BsSearch
									onClick={() => {
										navigate("/search");
									}}
								/>
								<BiMenu />
							</div>
						</header>

						<main className="Advertisement-main">
							<form action="summit" className="form-wrapper">
								<div className="form-group">
									<input type="text" placeholder="Name" />
								</div>
								<div className="form-group">
									<input type="text" placeholder="PhoneNumber enter" />
								</div>
								<div className="form-group">
									<input type="text" placeholder="Email enter" />
								</div>

								<div className="form-group">
									<div>
										<div>
											<label htmlFor="">
												<input type="radio" value="광고" />
												<span>광고</span>
											</label>
										</div>
										<div>
											<label htmlFor="">
												<input type="radio" value="제휴" />
												<span>제휴</span>
											</label>
										</div>
									</div>
								</div>
								<div className="form-group">
									<input type="text" placeholder="Enter inquiry title" />
								</div>
								<div className="form-group">
									<input type="text" placeholder="Enter inquiry details" />
								</div>
							</form>
						</main>
					</div>
				</div>
			</div>
		</>
	);
}

export default AdvertisementScreen;

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
						<div className="Advertisement-container">
							<header className="Advertisement-header sm-only">
								<div
									className="header-img"
									onClick={() => {
										navigate("/");
									}}
								>
									<img src={Logo} alt="logo" />
								</div>

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
								{" "}
								<p className="title">Advertisement/Inquiry</p>
								<h1>Advertisement</h1>
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

									<div className="form-label">
										<div className="form-checkbox">
											<label htmlFor="">
												<input type="checkbox" value="광고" />
												<span>광고</span>
											</label>
										</div>
										<div className="form-checkbox">
											<label htmlFor="name">
												<input type="checkbox" value="제휴" />
												<span>제휴</span>
											</label>
										</div>
									</div>

									<div className="form-group">
										<input type="text" placeholder="Enter inquiry title" />
									</div>
									<div className="form-group">
										<textarea placeholder="Enter inquiry details" rows={8} />
									</div>

									<div className="form-agree">
										<input type="checkbox" value="동의" />
										<span>
											Information collection and consent for business inquiries
										</span>
									</div>

									<div className="form-button">
										<button>Send</button>
									</div>
								</form>
							</main>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AdvertisementScreen;

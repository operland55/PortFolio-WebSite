import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";
import Menu from "./Menu";
import { LoginId, MenuToggle } from "../atom";
function Header() {
	const [menuBtn, setMenuBtn] = useRecoilState(MenuToggle);
	const [profile, setProfile] = useState(false);
	const [Id, setId] = useRecoilState(LoginId);

	const navigate = useNavigate();
	const onClick = () => {
		setMenuBtn((toggle) => !toggle);
	};

	const profileShow = () => {
		setProfile((cur) => !cur);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="global-header">
						<div className="global-header-container">
							<div className="row">
								<div className="col-sm-4">
									<header className="gnb-header">
										<div className="logo sm-only">
											<Link to="/">
												<img src={Logo} alt="logo" />
											</Link>
										</div>

										<div className="header-icon sm-only">
											<button className="header-search">
												<Link to="/search">
													<BsSearch />
												</Link>
											</button>
											<button className="header-menu">
												<BiMenu onClick={onClick} />
											</button>
										</div>

										<div className="header-top md-only">
											{Id ? (
												<>
													<p className="header-top-id" onClick={profileShow}>
														{Id} <AiOutlineArrowDown />
													</p>
													{profile ? (
														<div className="header-profile">
															<div className="profile-img">
																<img src={Logo} alt="logo" />
															</div>
															<ul>
																<li>{Id}</li>
																<li>My love</li>
																<li>My Page</li>
																<li
																	onClick={() => {
																		setId("");
																		// location.reload();
																	}}
																>
																	Logout
																</li>
															</ul>
														</div>
													) : null}
												</>
											) : (
												<p
													className="header-top-login"
													onClick={() => {
														navigate("/login");
													}}
												>
													Login
												</p>
											)}

											<p>Service center</p>
										</div>

										<div className="header-bottom md-only">
											<nav className="header-bottom-list">
												<h1 className="visually-hidden">Menu</h1>

												<div className="header-bottom-nav">
													<div className="header-bottom-logo">
														<Link to={"/"}>
															<img src={Logo} alt="Logo" />
														</Link>
													</div>

													<ul className="header-bottom-item">
														<li className="header-bottom-items">
															<Link to={"/"}>Home</Link>
														</li>
														<li>
															<Link to={"/ViewAll"}>View all</Link>
														</li>
														<li className="header-bottom-items">
															<Link to={"/Favorites"}>Favorites</Link>
														</li>
														<li className="header-bottom-items">
															<Link to={"/Advertisement"}>Advertisement</Link>
														</li>
													</ul>
												</div>
											</nav>

											<div className="header-bottom-search">
												<Link to="/search">
													<BsSearch /> Search
												</Link>
											</div>
										</div>
									</header>
								</div>
							</div>
						</div>

						{menuBtn ? <Menu /> : ""}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;

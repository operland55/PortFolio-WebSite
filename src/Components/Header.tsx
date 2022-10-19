import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import Menu from "./Menu";
import { MenuToggle } from "../atom";
function Header() {
	const [menuBtn, setMenuBtn] = useRecoilState(MenuToggle);

	const onClick = () => {
		setMenuBtn((toggle) => !toggle);
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
											<p>로그인</p>
											<p>고객센터</p>
										</div>

										<div className="header-bottom md-only">
											<nav className="header-bottom-list">
												<h1 className="visually-hidden">Menu</h1>
												<ul className="header-bottom-item">
													<li className="header-bottom-items">
														<Link to={"/"}>
															<img src={Logo} alt="Logo" />
														</Link>
													</li>
													<li className="header-bottom-items">
														<Link to={"/"}>Home</Link>
													</li>
													<li>
														<Link to={"/Contents"}>Contents</Link>
													</li>
													<li className="header-bottom-items">
														<Link to={"/Favorites"}>Favorites</Link>
													</li>
													<li className="header-bottom-items">
														<Link to={"/Advertisement"}>Advertisement</Link>
													</li>
												</ul>
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

import React from "react";
import { useSetRecoilState } from "recoil";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { MenuToggle } from "../atom";
function Menu() {
	const closeBtn = useSetRecoilState(MenuToggle);
	const navigate = useNavigate();
	const onClick = () => {
		closeBtn(false);
	};
	return (
		<div className="bottom-bar sm-only">
			<div className="bottom-bar-header">
				<h1 className="logo">
					<Link to="/">
						<img src={Logo} alt="" />
					</Link>
				</h1>

				<div className="bottom-bar-close">
					<AiOutlineClose onClick={onClick} size="7vw" />
				</div>

				<div className="bottom-bar-login">
					<h2>Login/Join</h2>
				</div>
			</div>

			<nav className="bottom-bar-nav">
				<h1 className="visually-hidden">Menu</h1>
				<ul className="bottom-bar-item">
					<li className="bottom-bar-items active">
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"/ViewAll"}>ViewAll</Link>
					</li>
					<li className="bottom-bar-items">
						<Link to={"/Favorites"}>Favorites</Link>
					</li>
					<li className="bottom-bar-items">
						<Link to={"/Advertisement"}>Advertisement</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Menu;

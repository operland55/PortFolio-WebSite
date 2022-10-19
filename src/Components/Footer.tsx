import React from "react";
import Logo from "../assets/logo.png";

function Footer() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="bottom-footer">
						<div className="bottom-logo">
							<img src={Logo} alt="bottomLogo" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;

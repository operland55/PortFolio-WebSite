import React from "react";
import Header from "../Components/Header";
import Footer from "./Footer";
import {
	AiOutlineArrowLeft,
	AiOutlineClose,
	AiFillApple,
	AiFillFacebook,
} from "react-icons/ai";

import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
	const navigate = useNavigate();

	const backBtn = () => {
		navigate(-1);
	};
	return (
		<>
			<div className="sm-hidden">
				<Header />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="sign-container">
							<header>
								<button onClick={backBtn} className="sm-only">
									<AiOutlineClose />
								</button>
								<div className="bar"></div>
							</header>

							<main>
								<div className="sign-title">
									<h1>Join now and enjoy</h1>
								</div>

								<form>
									<div className="sign-input">
										<div className="sign-input-id">
											<input type="text" placeholder="Id" />
											<button className="input-double">Overlap check</button>
										</div>
										<p>
											Please sign up with at least 5 characters and no more than
											20 characters.
										</p>
									</div>

									<div className="sign-input">
										<div className="sign-input-password">
											<input
												type="text"
												placeholder="Please sign up within 8 characters or less"
											/>
										</div>

										<div className="sign-input-password">
											<input
												type="text"
												placeholder="Please enter your password again"
											/>
										</div>

										<div>
											<p>Please sign up within 8 characters or less</p>
										</div>
									</div>

									<div className="sign-btn">
										<button>Sign Up</button>
									</div>

									<div className="sign-login-sns">
										<p>Or log in with a different service account</p>

										<ul className="sign-login-icons">
											<li style={{ background: "yellow" }}>
												<RiKakaoTalkFill color="black" />
											</li>
											<li style={{ background: "green" }}>
												<SiNaver />
											</li>
											<li style={{ background: "navy" }}>
												<AiFillFacebook color="white" />
											</li>
											<li style={{ background: "white" }}>
												<AiFillApple color="black" />
											</li>
										</ul>

										<p className="sign-login-exp">
											*You can use the service by simply signing up with your
											SNS account.
										</p>
									</div>
								</form>
							</main>
						</div>
					</div>
				</div>
			</div>

			<div className="sm-hidden">
				<Footer />
			</div>
		</>
	);
}

export default SignUp;

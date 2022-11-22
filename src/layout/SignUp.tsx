import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { JoinFunAtom } from "../atom";

interface IForm {
	Id: string;
	Password: string;
	CheckPassword: string;
}

function SignUp() {
	const [Info, setInfo] = useRecoilState(JoinFunAtom);
	const [IdValue, setIdValue] = useState("");
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<IForm>();
	const navigate = useNavigate();

	const backBtn = () => {
		navigate(-1);
	};

	const onValid = (data: IForm) => {
		for (const item of Info) {
			if (item.Id === data.Id) {
				return alert("이미있는아뒤에요");
			}
		}
		setInfo((oldInfo) => {
			return [{ Id: data.Id, Password: data.Password }, ...oldInfo];
		});
		alert(`회원가입을 축하해요 ${data.Id} 님`);
		navigate("/login");
	};

	const checkBtn = () => {
		for (const item of Info) {
			if (IdValue.length < 5) {
				alert("5 characters or more");
			} else if (item.Id === IdValue) {
				alert("it already exists");
			}
		}
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

								<form onSubmit={handleSubmit(onValid)}>
									<div className="sign-input">
										<div className="sign-input-id">
											<input
												type="text"
												placeholder="Id"
												{...register("Id", {
													required: true,
													minLength: {
														value: 5,
														message: "5 characters or more",
													},
												})}
												onChange={(e) => {
													setIdValue((cur) => (cur = e.target.value));
												}}
											/>
											<span className="check" onClick={checkBtn}>
												Overlap check
											</span>
										</div>
										<p>
											Please sign up with at least 5 characters and no more than
											20 characters.
										</p>
									</div>

									<div className="sign-input">
										<div className="sign-input-password">
											<input
												{...register("Password", {
													required: true,
													minLength: 8,
												})}
												type="Password"
												placeholder="Password"
											/>
										</div>

										<div className="sign-input-password">
											<input
												{...register("CheckPassword", {
													required: true,
													minLength: 8,
												})}
												type="password"
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

import React from "react";
import Header from "../Components/Header";
import Footer from "../layout/Footer";
import {
	AiOutlineArrowLeft,
	AiFillApple,
	AiFillFacebook,
} from "react-icons/ai";

import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { JoinFunAtom, LoginId } from "../atom";
import { useForm } from "react-hook-form";

interface IForm {
	Id: string;
	Password: string;
}
function Login() {
	const [info, setInfo] = useRecoilState(JoinFunAtom);
	const [loginId, setLoginId] = useRecoilState(LoginId);
	const {
		handleSubmit,
		register,
		setError,
		formState: { errors },
	} = useForm<IForm>();
	const navigate = useNavigate();

	const Login = (data: IForm) => {
		for (let item of info) {
			if (item.Id == data.Id && item.Password == data.Password) {
				alert(`Welcome to my Site ${data.Id}`);
				setLoginId((cur) => (cur = data.Id));
				navigate("/");
			} else {
				setError("Id", { message: "Id or wrong Password " });
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
						<div className="login-container">
							<div className="login-header sm-only">
								<AiOutlineArrowLeft
									className="login-back-icon"
									onClick={() => {
										navigate(-1);
									}}
								/>
								<h1>Login</h1>
								<p></p>
							</div>

							<div className="login-form">
								<div className="login-box sm-hidden">
									<h1>Login</h1>

									<p>snow rain cloud kid Id Login</p>
								</div>
								<form
									className="login-form-wrapper"
									onSubmit={handleSubmit(Login)}
								>
									<div className="login-input">
										<div className="login-input-box">
											<input type="text" placeholder="Id" {...register("Id")} />
										</div>
									</div>
									<div className="login-input">
										<div className="login-input-box">
											<input
												type="password"
												placeholder="Password"
												{...register("Password")}
											/>
										</div>
									</div>

									<div className="login-button">
										<p>{errors.Id?.message}</p>
										<button type="submit">Login</button>
									</div>
								</form>

								<ul className="login-links">
									<li>
										<Link to={"/"}>ID Find</Link>
									</li>
									<li>
										<Link to={"/"}>Password Retouch</Link>
									</li>
									<li>
										<Link to={"/SingUp"}>Sign Up</Link>
									</li>
								</ul>

								<div className="login-sns">
									<p>Or log in with a different service account</p>

									<ul className="login-icons">
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

									<p className="login-exp">
										*You can use the service by simply signing up with your SNS
										account.
									</p>
								</div>
							</div>
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

export default Login;

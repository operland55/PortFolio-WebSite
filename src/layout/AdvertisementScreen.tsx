import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { MenuToggle } from "../atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import { LoginId } from "../atom";
function AdvertisementScreen() {
	interface IAuthForm {
		name: string;
		Email: string;
		pw: string;
		PhoneNumber: string;
		inquirytitle: string;
	}

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IAuthForm>();
	const navigate = useNavigate();
	const loginId = useRecoilValue(LoginId);
	const [menuBtn, setMenuBtn] = useRecoilState(MenuToggle);

	const submit = (data: IAuthForm) => {
		alert("has been sent");
	};

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
								<p className="title sm-hidden">Advertisement/Inquiry</p>
								<h1>Advertisement</h1>
								<form
									action="summit"
									className="form-wrapper"
									onSubmit={handleSubmit(submit)}
								>
									<div className="form-group">
										<input
											type="text"
											placeholder="Name"
											{...register("name", {
												required: "Please enter your name",
											})}
										/>
									</div>

									<p className="errorMessage">{errors.name?.message}</p>

									<div className="form-group">
										<input
											type="text"
											placeholder="PhoneNumber enter"
											{...register("PhoneNumber", {
												required: "Please enter your PhoneNumber",
											})}
										/>
									</div>

									<p className="errorMessage">{errors.PhoneNumber?.message}</p>

									<div className="form-group">
										<input
											type="text"
											placeholder="Email enter"
											{...register("Email", {
												required: "Please enter your email",
											})}
										/>
									</div>

									<p className="errorMessage">{errors.Email?.message}</p>

									<div className="form-label">
										<div className="form-checkbox">
											<label htmlFor="">
												<input type="checkbox" value="광고" />
												<span>advertisement</span>
											</label>
										</div>
										<div className="form-checkbox">
											<label htmlFor="name">
												<input type="checkbox" value="제휴" />
												<span>alliance</span>
											</label>
										</div>
									</div>
									<div className="form-group">
										<input
											type="text"
											placeholder="Enter inquiry title"
											{...register("inquirytitle", {
												required: "Please enter inquiry title",
											})}
										/>
									</div>
									<p className="errorMessage">{errors.inquirytitle?.message}</p>

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
										<button
											onClick={() => {
												loginId ? "" : alert("Please Login");
											}}
										>
											Send
										</button>
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

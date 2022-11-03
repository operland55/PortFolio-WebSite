import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../layout/Footer";
import SearchScreen from "../layout/SearchScreen";
import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
interface IForm {
	keyword: string;
}

function Search() {
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const navigate = useNavigate();

	const onValid = (data: IForm) => {
		navigate(`/search?keyword=${data.keyword}`);
		setValue("keyword", "");
	};

	return (
		<>
			<div className="sm-hidden">
				<Header />
			</div>
			<div className="search-container">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="search-box">
								<form onSubmit={handleSubmit(onValid)}>
									<div className="search-input-box">
										<BsSearch className="search-icon" />
										<input
											type="text"
											placeholder="Please keyword enter"
											{...register("keyword", { required: true, minLength: 2 })}
										/>
									</div>
								</form>
								<Link to="/">취소</Link>
							</div>

							<SearchScreen />
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

export default Search;

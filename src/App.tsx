import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentsDetail from "./layout/ContentsMovieDetail";
import Advertisement from "./Routes/Advertisement";
import ViewAll from "./Routes/ViewAll";
import FavoriteGroup from "./Routes/FavoriteGroup";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import ContentsMovieDetail from "./layout/ContentsMovieDetail";
import ContentsTvDetail from "./layout/ContentsTvDetail";
import Preview from "./Components/PreviewVideo";
import Login from "./Routes/Login";
import SignUp from "./layout/SignUp";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/Search" element={<Search />}></Route>
					<Route path="/Search/:id" element={<Search />}></Route>
					<Route path="/ViewAll" element={<ViewAll />}></Route>
					<Route path="/Login" element={<Login />}></Route>
					<Route path="/SingUp" element={<SignUp />}></Route>

					<Route
						path="/ContentsMovie/:DetailId"
						element={<ContentsMovieDetail />}
					></Route>

					<Route
						path="/ContentsTv/:DetailId"
						element={<ContentsTvDetail />}
					></Route>

					<Route path="/Favorites" element={<FavoriteGroup />}></Route>
					<Route path="/Advertisement" element={<Advertisement />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

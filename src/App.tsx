import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentsDetail from "./Components/ContentsDetail";
import Header from "./Components/Header";
import Advertisement from "./Routes/Advertisement";
import Contents from "./Routes/Contents";
import FavoriteGroup from "./Routes/FavoriteGroup";

import Home from "./Routes/Home";
import Search from "./Routes/Search";
function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/Search" element={<Search />}></Route>
					<Route path="/Contents" element={<Contents />}></Route>
					<Route
						path="/Contents/:DetailId"
						element={<ContentsDetail />}
					></Route>
					<Route path="/Favorites" element={<FavoriteGroup />}></Route>
					<Route path="/Advertisement" element={<Advertisement />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

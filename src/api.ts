export const API_KEY = "bb50b072ab393b23b85d0c258de3c425";
export const BASE_PATH = "https://api.themoviedb.org/3";

export interface Icredits {
	cast: ICast[];
}
export interface ICast {
	id: number;
	name: string;
	popularity: number;
	profile_path: number;
	character: string;
	credit_id: string;
}
export interface IImg {
	backdrops: [
		{
			file_path: string;
			height: number;
			iso_639_1: null;
			vote_average: number;
			vote_count: number;
			width: number;
		}
	];
	posters: [
		{
			file_path: string;
			height: number;
			iso_639_1: string;
			vote_average: number;
			vote_count: number;
			width: number;
		}
	];
}

export interface IReview {
	results: IReviewResults[];
}

export interface IReviewResults {
	author: string;
	author_details: {
		avatar_path: string;
		name: string;
		rating: number;
		username: string;
	};
	content: string;
	content_at: string;
	id: string;
	updated_at: string;
}
export interface IMovie {
	id: number;
	backdrop_path: string;
	poster_path: string;
	title: string;
	overview: string;
	name: string;
	genre_ids: number[];
	release_date: string;
}
export interface IGetTv {
	id: number;
	backdrop_path: string;
	poster_path: string;
	title: string;
	overview: string;
	name: string;
	genre_ids: number[];
	release_date: string;
}

export interface TvDetail {
	backdrop_path: string;
	homepage: string;
	id: number;
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: [];
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	seasons: [
		{
			air_date: string;
			episode_count: 64;
			id: number;
			name: string;
			overview: string;
			poster_path: string;
			season_number: number;
		}
	];
}

export interface IGetResult {
	dates: { maximum: string; minimum: string };
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
	id: number;
}

export interface IGetDetailMovie {
	adult: boolean;
	homepage: string;
	original_language: string;
	backdrop_path: string;
	id: number;
	original_title: string;
	overview: string;
	poster_path: string;
	release_date: string;
	runtime: number;
	title: string;
	tagline: string;
	name: string;
	vote_average: number;
	first_air_date: string;
	genres: [
		{
			id: number;
			name: string;
		}
	];
}

export function getMovies() {
	return fetch(
		`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
	).then((res) => res.json());
}

export function getPopularMovie() {
	return fetch(
		`${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
	).then((res) => res.json());
}

export function getUpComingMovie() {
	return fetch(
		`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=2`
	).then((res) => res.json());
}
export function getSimilarMovies(movieId?: Number | string) {
	return fetch(
		`${BASE_PATH}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
	).then((res) => res.json());
}

export function getDetailMovie(movieId: unknown) {
	return fetch(
		`${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
	).then((res) => res.json());
}

export function getReviewMovie(movieId: unknown) {
	return fetch(
		`${BASE_PATH}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
	).then((res) => res.json());
}
export function getCastMovie(movieId: unknown) {
	return fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=bb50b072ab393b23b85d0c258de3c425&language=en-US`
	).then((res) => res.json());
}
export function getImgMovie(movieId: string) {
	return fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`
	).then((res) => res.json());
}

export function getVideoMovie(movieId: string) {
	return fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=bb50b072ab393b23b85d0c258de3c425&language=en-US`
	).then((res) => res.json());
}
// Tv

export function getDetailTV(TvId: unknown) {
	return fetch(
		`${BASE_PATH}/tv/${TvId}?api_key=${API_KEY}&language=en-US`
	).then((res) => res.json());
}

export function getTopTv() {
	return fetch(
		`${BASE_PATH}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
	).then((res) => res.json());
}

export function getSimilarTv(TvId: unknown) {
	return fetch(
		`${BASE_PATH}/tv/${TvId}}/similar?api_key=${API_KEY}&language=en-US&page=1`
	).then((res) => res.json());
}

export function getCastTv(TvId: unknown) {
	return fetch(`
	${BASE_PATH}/tv/${TvId}/credits?api_key=${API_KEY}&language=en-US
	`).then((res) => res.json());
}
export function getImgTv(TvId: string) {
	return fetch(
		`	${BASE_PATH}/tv/${TvId}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`
	).then((res) => res.json());
}
export function getVideoTv(TvId: string) {
	return fetch(
		`https://api.themoviedb.org/3/tv/${TvId}/videos?api_key=bb50b072ab393b23b85d0c258de3c425&language=en-US`
	).then((res) => res.json());
}
// genre

export function getGenreId() {
	return fetch(`
	${BASE_PATH}/genre/movie/list?api_key=${API_KEY}&language=en-US`).then((res) =>
		res.json()
	);
}

// search

export function InfoSearch(search: unknown) {
	return fetch(
		`${BASE_PATH}/search/multi?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
	).then((res) => res.json());
}

import axios from 'axios';

export const BASE_URL_API = 'https://api.themoviedb.org/3/';
export const API_KEY = '3f79db43171c23f424c38905f9a1a7c6';
export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/original';
export const MOVIE = 'movie';

// Images
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
export const getW45ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w45${imagePath}`;
export const getW92ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w92${imagePath}`;
export const getW185ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w185${imagePath}`;
export const getW300ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w300${imagePath}`;
export const getW500ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w500${imagePath}`;
export const getW780ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w780${imagePath}`;
export const getW1280ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w1280${imagePath}`;

let API = axios.create({
  baseURL: BASE_URL_API,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export default API;

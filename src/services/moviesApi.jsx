import axios from "axios";

const KEY = 'ffa446ff4e98eda704f81d136e56b989';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);

    if (response.status !== 200) {
        throw new Error('Error, nothing found');
      
    }
    // console.log(response.data)
    return response.data.results;
    
};

export const fetchSearchMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&page=1&query=${query}`);

    if (response.status !== 200) {
        throw new Error('Error, nothing found');
    }
    console.log(response.data)
    return response.data.results;
    
};

export const fetchMoviesDetails = async (movieId) => {
    const response = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${KEY}`)

    if (response.status !== 200) {
        throw new Error('Error, nothing found');
    }
    return response.data.results;
};

export const getMovieCredits = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`)

    if (response.status !== 200) {
        throw new Error('Error, nothing found');
    }
    return response.data.results;
}

export const getMovieReviews  = async (movieId) => {
    const response = await axios.get(`${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}`)

    if (response.status !== 200) {
        throw new Error('Error, nothing found');
    }
    return response.data.results;
}
import axios from "axios";

const KEY = 'ffa446ff4e98eda704f81d136e56b989';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);

    if (response.status !== 200) {
        throw new Error('Error, nothing found');
      
    }
    console.log(response.data)
    return response.data.results;
    
}


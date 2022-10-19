import { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'services/moviesApi';
import PopularMovieItem from 'components/PopularMovieItem/PopularMovieItem';


const Home = () => {
     const [popularMovies, setPopularMovies] = useState([]);
    const [error, setError] = useState(null);

     useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await fetchPopularMovies()

                setPopularMovies([...data])

            } catch (error) {
                setError(error)
            }
        }
        fetchMovies();
    }, [])


    return (
      <>
        {!error && <h2>Trending today</h2>}
        <ul>{popularMovies && <PopularMovieItem movies={popularMovies} />}</ul>
        
   </>
    )
}



export default Home;
import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react'
import { fetchPopularMovies } from 'services/moviesApi';
import styles from 'pages/Home/Home.module.css'
// import PopularMovieItem from 'components/PopularMovieItem/PopularMovieItem';
const PopularMovieItem = lazy(() => import('components/PopularMovieItem/PopularMovieItem'));


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
            <Suspense>
        <ul className={styles.list}>{popularMovies && <PopularMovieItem movies={popularMovies} />}</ul>
        </Suspense>
   </>
    )
}



export default Home;
import { useState, useEffect } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/moviesApi';
import styles from 'pages/MovieDetails/MovieDetails.module.css'

import PropTypes from 'prop-types';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const location = useLocation();
    const { movieId } = useParams();
    

    const {
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,

    } = movieDetails;

    // const backLink = location.state ? location.state.form : '/';
const backLink = location.state?.from ?? '/movies';

    useEffect(() => {
        const fetchMovie = async () => {
        
            
            setMovieDetails([])

            try {
                const data = await fetchMoviesDetails(movieId);
               
                setMovieDetails(data)
                
            } catch (error) {
                console.log('error')
               
            }
        }
        fetchMovie();
    }, [movieId])
  


    return (
        <div>
            <Link className={styles.backLink} to={backLink}>
                <button className={styles.backButton} type='button'>Go Back</button>
            </Link>
            {/* <div className={styles.wraper}> */}
            <div className={styles.wraper}>
                <div>
                <h1 className={styles.originalTitle}>{original_title}</h1>
                <img className={styles.listItemImage} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
                    </div>
           
                <div>
                    <h2 className={styles.title}>Release Date</h2>
                    <p className={styles.releaseDate}>({release_date?.slice(0, 4)})</p>
                    <h2 className={styles.title}>Genres</h2>
                    <p className={styles.detailsText}>{genres?.map(genre => genre.name).join('/')}</p>
                    <p className={styles.userScore}>User Score: {Math.round(vote_average * 10)}%</p>
                <h2 className={styles.title}>Overview</h2>  
                    <p className={styles.detailsText}>{overview}</p> 
                    </div>
                     </div>
                
                
                
                           
           
            <div className={styles.wraperDetails}>
                <h2 className={styles.detailsTitle}>Additional information</h2>
                <ul className={styles.detailsList}>
                    <li className={styles.detailsItem}>
                        <Link className={styles.detailsLink} to="cast" state={{from: backLink}}>Cast</Link>
                    </li>
                     <li className={styles.detailsItem}>
                        <Link className={styles.detailsLink} to="reviews" state={{from: backLink}}>Reviews</Link>
                    </li>
                </ul>
                    <Outlet />
                    </div>
            </div>
        // </div>
    )
}

MovieDetails.propTypes = {
    movieDetails: PropTypes.arrayOf(
        PropTypes.shape({
        original_title: PropTypes.string.isRequired,
        genres: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        release_date: PropTypes.number.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        
    }),
),
}

export default MovieDetails;
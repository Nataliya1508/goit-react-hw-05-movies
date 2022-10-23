import { useState, useEffect } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/moviesApi';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    // const [error, setError] = useState(null)
    const location = useLocation();
    const { movieId } = useParams();
    

    const {
        original_title,
        genres,
        poster_path,
        release_date,
        vote_average,

    } = movieDetails;

    // console.log(movieDetails.original_title)

    const backLink = location.state ? location.state.form : '/';


    useEffect(() => {
        const fetchMovie = async () => {
            // setError(null);
            
            setMovieDetails([])

            try {
                 await fetchMoviesDetails(movieId)
                setMovieDetails(fetchMoviesDetails(movieId))
                console.log(fetchMoviesDetails(movieId))
            } catch (error) {
                console.log('error')
                // setError(error)
            }
        }
        fetchMovie();
    }, [movieId])
  


    return (
        <div>
            <Link to={backLink}>
                <button type='button'>Go Back</button>
            </Link>
            <div>
                <img srs={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
                <h1>{original_title}</h1>
                <h2>Release Date</h2>
                <p>({release_date?.slice(0, 4)})</p>
                <p>User Score: {Math.round(vote_average * 10)}%</p>
                <h2>Genres</h2>
                <p>{genres?.map(genre => genre.name).join('/')}</p>
            </div>
            <div>
                <h2>Additional information</h2>
                <ul>
                    <li>
                        <Link to="cast" state={{from: backLink}}>Cast</Link>
                    </li>
                     <li>
                        <Link to="reviews" state={{from: backLink}}>Reviews</Link>
                    </li>
                </ul>
                <Outlet />
            </div>
        </div>
    )
}

export default MovieDetails;
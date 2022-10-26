import { Link, useLocation } from "react-router-dom";
import styles from 'components/PopularMovieItem/PopularMovieItem.module.css'


const PopularMoviesItem = ({movies}) => {

 const location = useLocation();




 return movies.map(movie => {

    return (

        <li key={movie.id} className={styles.listItem}>

            <Link
                className={styles.listItemLink}
                to={`/movies/${movie.id}`} state={{ from: location }}>

            
                <p className={styles.listItemTitle}>{movie.title || movie.name}</p>
                    <img
                  className={styles.listItemImage}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />

            </Link>

        </li>

    );

 });




};


export default PopularMoviesItem;
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesApi';
import styles from 'components/Cast/Cast.module.css'
import PropTypes from 'prop-types';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    

     useEffect(() => {
        const fetchMovie = async () => {
           
            setCast(null)

        try {
            const data = await getMovieCredits(movieId)

            setCast(data)

        } catch (error) {
            console.log(error)
        
        }
    }
        fetchMovie();
    }, [movieId])


    return cast && cast.length === 0 ? (
        <p className={styles.detailsMessage}>No iformation</p>) :
        (
            <div>
                <ul className={styles.castList}>
                    {cast && cast.map(({ id, profile_path, original_name, name, character }) => (
                         
                   
                        <li key={id} className={styles.castItem}>
                            <img className={styles.movieImg} src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                            alt = { original_name }/>
                        
                        <p className={styles.castName}>{name}</p>
                            <p className={styles.castCharacter}>Character: {character}</p>
                            </li>
                    ))}
                </ul>
            </div>
    )
}

Cast.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            profile_path: PropTypes.string.isRequired,
            original_name: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired,
        })
    )
}

export default Cast;

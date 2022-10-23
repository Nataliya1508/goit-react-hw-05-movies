import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesApi';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieCredits(movieId).then(movie => setCast(movie.cast))
    }, [movieId]);

    return cast && cast.length !== 0 ? (
        <p>No iformation</p>) :
        (
            <div>
                <ul>
                    {cast && cast.map(({ id, profile_path, original_name, name, character }) => (
                         
                   
                        <li key={id}>
                            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                            alt = { original_name }/>
                        
                        <p>{name}</p>
                            <p>Character: {character}</p>
                            </li>
                    ))}
                </ul>
            </div>
    )
}

export default Cast;

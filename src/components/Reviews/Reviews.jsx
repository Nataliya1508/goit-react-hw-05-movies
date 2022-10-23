import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesApi';

const Reviews = () => {
    const [reviews, setRewiews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews(movieId).then(setRewiews);
    }, [movieId])
    
    return reviews && reviews.length !== 0 ? (
        <p>We don't have any reviews for this movie</p>) : (
        <div>
                {reviews?.map(({ id, author, content }) => <li key={id}>
                    <p>Author {author}</p>
                    <p>{content}</p>
                </li>
                )}
            </div>
    )


}

export default Reviews;
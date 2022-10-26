import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesApi';

import PropTypes from 'prop-types';
import styles from 'components/Reviews/Reviews.module.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
          
            setReviews(null)

        try {
            const data = await getMovieReviews(movieId)

            setReviews(data)

        } catch (error) {

            console.log(error)
        }
    }
        fetchMovie();
    }, [movieId])

    
    return reviews && reviews.length === 0 ? (
        <p className={styles.detailsMessage}>   className=We don't have any reviews for this movie</p>) : (
        <div>
                {reviews?.map(({ id, author, content }) =>
                    <li key={id} className={styles.reviewsItem}>
                    <p className={styles.reviewsName}>Author {author}</p>
                    <p className={styles.reviewsText}>{content}</p>
                </li>
                )}
            </div>
    )


}

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    )
}

export default Reviews;
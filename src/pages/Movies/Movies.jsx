import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';
import { useSearchParams, } from 'react-router-dom';
import { fetchSearchMovies } from 'services/moviesApi';
import SearchBar from 'components/SearchBar/SearchBar';
import PopularMovieItem from 'components/PopularMovieItem/PopularMovieItem';
import styles from 'pages/Movies/Movies.module.css'

import PropTypes from 'prop-types';



const Movies = () => {

    const [searchMovie, setSearchMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null)

    const query = searchParams.get('query') || '';

    const handleSubmit = value => {
        setSearchParams(value !== '' ? {query: value} : {})
    }

    useEffect(() => {
    if (query === '') {
      return
    }

  const fetchMovies = async () => {
    setLoading(true)

    try {
      const data = await fetchSearchMovies(query)

      if (data.length === 0) {
        setSearchMovie([])
        return Notiflix.Notify.failure('Please, check the correct spelling of the movie title and try again')
      }

     setSearchMovie([...data])

    } catch (error) {
      setError(error)
    }
    finally {
      setLoading(false)
    }
  }
    fetchMovies();
  }, [query])
    
    return (
        <div>
            <div>
                <SearchBar onSubmit={handleSubmit} value={query} />
                {loading && <Loader />}
                {error && <p>Oops! Something went wrong :( Please, reload page and try again</p>}
               
            </div>
   
        <ul className={styles.list}>{searchMovie && <PopularMovieItem movies={searchMovie} />}</ul>
        
        
        </div>
    )
    
}
Movies.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,

  }),
}

export default Movies;
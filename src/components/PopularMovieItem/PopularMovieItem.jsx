import { Link, useLocation } from "react-router-dom";


const PopularMoviesItem = ({movies}) => {

 const location = useLocation();




 return movies.map(movie => {

    return (

        <li key={movie.id}>

            <Link to={`movies/${movie.id}`} state={{ from: location }}>

            {movie.title || movie.name}

            </Link>

        </li>

    );

 });




};


export default PopularMoviesItem;
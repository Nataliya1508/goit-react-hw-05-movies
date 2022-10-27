import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Navigation from "./Navigation/Navigation"
// import Loader from "./Loader/Loader"
// const Navigation = lazy(() => import('components/Navigation'))
import SharedLayout from './SharedLayout/SharedLayout';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Loader = lazy(() => import('./Loader/Loader'))
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));


// import SharedLayout from './SharedLayout/SharedLayout';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails'
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';



export const App = () => {
  return (
    <div>
    
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Route>
        <Route path="*" element={<NotFoundPage />} />
          </Route>
      </Routes>
     </Suspense>
    </div>
  );
};

import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
// import Navigation from "./Navigation/Navigation"
// import Loader from "./Loader/Loader"
// const Navigation = lazy(() => import('components/Navigation'))
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails'
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Route>
        {/* <Route path="*" element={<Home />} /> */}
          </Route>
      </Routes>
     
    </div>
  );
};

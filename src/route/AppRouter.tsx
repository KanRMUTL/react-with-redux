import { Routes, Route } from 'react-router-dom';
import routePath from 'constant/routePath';
import Home from 'pages/Home';
import Trending from 'pages/Trending';
import MovieDetail from 'pages/MovieDetail';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routePath.home} element={<Home />} />
      <Route path={routePath.trending} element={<Trending />} />
      <Route path={routePath.movie} element={<MovieDetail />} />
    </Routes>
  );
};

export default AppRouter;

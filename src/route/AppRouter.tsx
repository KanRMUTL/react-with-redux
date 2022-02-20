import { Routes, Route } from 'react-router-dom';
import routePath from 'constant/routePath';
import menuList from 'constant/menuList';
import Home from 'pages/Home';
import Trending from 'pages/Trending';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routePath.home} element={<Home />} />
      <Route path={routePath.trending} element={<Trending />} />
    </Routes>
  );
};

export default AppRouter;

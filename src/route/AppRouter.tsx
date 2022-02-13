import { Routes, Route } from 'react-router-dom';
import routePath from 'constant/routePath';
import Home from 'pages/Home';
const AppRouter = () => {
  return (
    <Routes>
      <Route path={routePath.home} element={<Home />} />
    </Routes>
  );
};

export default AppRouter;

import { Routes, Route } from 'react-router-dom';
import mapRoutes from './mapRoute';

const AppRouter = () => {
  return (
    <Routes>
      {mapRoutes.map(({ path, component, id }) => (
        <Route key={id} path={path} element={component} />
      ))}
    </Routes>
  );
};

export default AppRouter;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import mapRoutes from './mapRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {mapRoutes.map(({ path, component, id }) => (
          <Route key={id} path={path} element={component} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;

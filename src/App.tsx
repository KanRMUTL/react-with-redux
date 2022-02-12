import React, { useEffect } from 'react';
import AppRouter from './route/AppRouter';
import Loading from './components/Loading';
import Alert from './components/Alert';
import AppContainer from './components/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Loading>
        <Alert>
          <Router>
            <AppContainer>
              <AppRouter />
            </AppContainer>
          </Router>
        </Alert>
      </Loading>
    </div>
  );
};

export default App;

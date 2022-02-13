import React from 'react';
import AppRouter from './route/AppRouter';
import Loading from './components/Loading';
import Alert from './components/Alert';
import AppContainer from './components/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <AppContainer>
          <Alert>
            <Loading>
              <AppRouter />
            </Loading>
          </Alert>
        </AppContainer>
      </Router>
    </div>
  );
};

export default App;

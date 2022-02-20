import React, { useEffect } from 'react';
import MovieDatabase from 'utils/services/MovieDatabase';
import AppReducerHook from 'utils/hooks/AppReducerHook';

import MovieList from 'components/MovieList';
import { Wrapper } from 'components/Navbar/styled';
import MoviesHook from 'utils/hooks/MoviesHook';

const Home = () => {
  const { appState, dispatch } = AppReducerHook();
  const movie = new MovieDatabase();
  const { fetchMovies } = MoviesHook({ movie, path: movie.path.trending });

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <Wrapper>
      <MovieList movies={appState.movies} />
    </Wrapper>
  );
};

export default Home;

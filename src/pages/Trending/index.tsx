import React, { useEffect } from 'react';
import MovieDatabase from 'utils/services/MovieDatabase';
import AppReducerHook from 'utils/hooks/AppReducerHook';

import MovieList from 'components/MovieList';
import { Wrapper } from './styled';
import MoviesHook from 'utils/hooks/MoviesHook';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { appState, dispatch } = AppReducerHook();
  const movie = new MovieDatabase();
  const { fetchMovies } = MoviesHook({ movie, path: movie.path.trending });
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <Wrapper>
      <MovieList
        movies={appState.movies}
        onClickMovie={(movie) => navigate(`movie/${movie.id}`)}
      />
    </Wrapper>
  );
};

export default Home;

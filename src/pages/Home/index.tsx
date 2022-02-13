import React, { useEffect, useState } from 'react';
import MovieDatabase from 'utils/services/MovieDatabase';
import AppReducerHook from 'utils/hooks/AppReducerHook';
import { Actions } from 'utils/types/redux';
import MovieList from 'components/MovieList';
import { Wrapper } from 'components/Navbar/styled';

const Home = () => {
  const { appState, dispatch } = AppReducerHook();
  const movie = new MovieDatabase();

  const getPopular = () => () => {
    dispatch({ type: Actions.FETCHING });
    setTimeout(async () => {
      try {
        const data = await movie.getPopular;
        dispatch({
          type: Actions.SUCCESS,
          payload: {
            movies: data.results,
          },
        });
      } catch (error) {
        dispatch({
          type: Actions.ERROR,
          payload: {
            errorMessage: error,
          },
        });
      }
    }, 1000);
  };

  useEffect(() => {
    dispatch(getPopular());
  }, []);

  return (
    <Wrapper>
      <MovieList movies={appState.movies} />
    </Wrapper>
  );
};

export default Home;

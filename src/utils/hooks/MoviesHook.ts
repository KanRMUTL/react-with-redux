import MovieDatabase from 'utils/services/MovieDatabase';
import { Actions } from 'utils/types/redux';
import AppReducerHook from 'utils/hooks/AppReducerHook';

interface Props {
  movie: MovieDatabase;
  path: string;
}

const MoviesHook = ({ movie, path }: Props) => {
  const { dispatch } = AppReducerHook();

  const fetchMovies = () => () => {
    dispatch({ type: Actions.FETCHING });
    setTimeout(async () => {
      try {
        const data = await movie.getMovies(path);
        dispatch({
          type: Actions.SUCCESS,
          payload: {
            movies: data.results,
          },
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: Actions.ERROR,
          payload: {
            errorMessage: error,
          },
        });
      }
    }, 1000);
  };

  return {
    fetchMovies,
  };
};

export default MoviesHook;

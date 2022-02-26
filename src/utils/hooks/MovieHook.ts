import { Movie } from 'utils/types/movie';
import MovieDatabase from 'utils/services/MovieDatabase';
import { useState } from 'react';

interface Props {
  movieDatabase: MovieDatabase;
  path: string;
}
const MovieHook = ({ movieDatabase, path }: Props) => {
  const [movie, setMovie] = useState({} as Movie);

  const fetchMovieDetail = async () => {
    try {
      const data = await movieDatabase.getMovies(path);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return { movie, fetchMovieDetail };
};

export default MovieHook;

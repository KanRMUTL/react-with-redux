import React, { FC } from 'react';
import MovieItem from 'components/MovieItem';
import { Movie } from 'utils/types/movie';
import { Wrapper } from './styled';
interface Props {
  movies: Movie[];
  onClickMovie: (movie: Movie) => void;
}

const MovieList: FC<Props> = ({ movies, onClickMovie }) => {
  return (
    <Wrapper>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onClickMovie={onClickMovie} />
      ))}
    </Wrapper>
  );
};

export default MovieList;

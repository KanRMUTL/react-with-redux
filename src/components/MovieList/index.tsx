import React, { FC } from 'react';
import MovieItem from 'components/MovieItem';
import { Movie } from 'utils/types/movie';
import { Wrapper } from './styled';
interface Props {
  movies: Movie[];
}

const MovieList: FC<Props> = ({ movies }) => {
  return (
    <Wrapper>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Wrapper>
  );
};

export default MovieList;

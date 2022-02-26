import React, { FC } from 'react';
import { Movie } from 'utils/types/movie';
import { W500_SIZE } from 'constant/api';
import { Wrapper, Poster } from './styled';
interface Props {
  movie: Movie;
  onClickMovie: (movie: Movie) => void;
}
const MovieItem: FC<Props> = ({ movie, onClickMovie }) => {
  return (
    <Wrapper>
      <Poster
        src={`${W500_SIZE}/${movie.poster_path}`}
        alt={`${movie.title}-back-drop`}
        onClick={() => onClickMovie(movie)}
      />
      <h2>{movie.title}</h2>
      <p>{movie.vote_average}</p>
    </Wrapper>
  );
};

export default MovieItem;

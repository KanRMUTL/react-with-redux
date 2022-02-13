import MainApi from './MainApi';
import { Movie } from 'utils/types/movie';

export interface Result {
  results: Movie;
  page: number;
  total_pages: number;
  total_results: number;
}

class MovieDatabase extends MainApi {
  public constructor() {
    super();
  }

  public getPopular = this.instance.get<Result>('movie/popular');
}

export default MovieDatabase;

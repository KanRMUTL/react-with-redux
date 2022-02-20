import MainApi from './MainApi';
import { Movie } from 'utils/types/movie';

export interface Result {
  results: Movie;
  page: number;
  total_pages: number;
  total_results: number;
}

class MovieDatabase extends MainApi {
  public path = {
    popular: 'movie/popular',
    trending: 'trending/{media_type}/{time_window}',
    tv: 'tv/airing_today',
    nowPlaying: 'movie/now_playing',
  };

  public constructor() {
    super();
  }

  public getMovies = (path: string) => this.instance.get<Result>(path);
}

export default MovieDatabase;

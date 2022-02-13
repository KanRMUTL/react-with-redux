import { Movie } from './movie';
export interface AppState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  movies: Movie[];
}

export enum Actions {
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

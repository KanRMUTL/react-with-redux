export interface AppState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export enum Actions {
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

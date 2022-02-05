import { AppState, Actions } from 'types/redux';

const initialState: AppState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
};

interface Action {
  type: Actions;
  payload?: AppState;
}

const appStateReducer = (state = initialState, action: Action): AppState => {
  const { type, payload } = action;

  switch (type) {
    case Actions.FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.SUCCESS:
      return {
        isLoading: false,
        isError: false,
        errorMessage: '',
      };
    case Actions.ERROR:
      return {
        ...state,
        isError: true,
        errorMessage: payload?.errorMessage ? payload?.errorMessage : '',
      };
  }
};

export default appStateReducer;

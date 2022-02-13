import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

const AppReducerHook = () => {
  const appState = useSelector((state: RootState) => state.appState);
  const dispatch = useDispatch();
  return {
    appState,
    dispatch,
  };
};

export default AppReducerHook;

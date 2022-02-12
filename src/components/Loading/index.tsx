import React, { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface Props {
  children: ReactNode;
}

const Loading: FC<Props> = ({ children }) => {
  const appState = useSelector((state: RootState) => state.appState);

  return appState.isLoading ? (
    <h2>Fetching data from API...</h2>
  ) : (
    <>{children}</>
  );
};

export default Loading;

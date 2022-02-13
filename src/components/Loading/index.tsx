import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface Props {
  children: ReactNode;
}

const Loading: FC<Props> = ({ children }) => {
  const appState = useSelector((state: RootState) => state.appState);

  return (
    <>
      {appState.isLoading && <h1>Fetching data...</h1>}
      {children}
    </>
  );
};

export default Loading;

import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface Props {
  children: ReactNode;
}

const Alert: FC<Props> = ({ children }) => {
  const appState = useSelector((state: RootState) => state.appState);

  return (
    <div>
      {appState.isError && <span>This is alert message</span>}
      {children}
    </div>
  );
};

export default Alert;

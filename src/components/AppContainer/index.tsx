import React, { ReactNode, FC } from 'react';
import Navbar from '../Navbar';
import menuList from 'constant/menuList';

interface Props {
  children: ReactNode;
}

const AppContainer: FC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar menuList={menuList} />
      </header>
      <article>{children}</article>
    </div>
  );
};

export default AppContainer;

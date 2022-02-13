import React, { ReactNode, FC } from 'react';
import Navbar from '../Navbar';
import menuList from 'constant/menuList';
import { Wrapper } from './styled';

interface Props {
  children: ReactNode;
}

const AppContainer: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <header>
        <Navbar menuList={menuList} />
      </header>
      <article>{children}</article>
    </Wrapper>
  );
};

export default AppContainer;

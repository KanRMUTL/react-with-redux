import React, { FC } from 'react';
import { Menu } from 'utils/types/Menu';
import { MenuLink } from './styled';
import { useLocation } from 'react-router-dom';
interface Props {
  menu: Menu;
}

const MenuItem: FC<Props> = ({ menu }) => {
  const { path } = menu;
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <MenuLink to={path} active={isActive.toString()}>
      {menu.name}
    </MenuLink>
  );
};

export default MenuItem;

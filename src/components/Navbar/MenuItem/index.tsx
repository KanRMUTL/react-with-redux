import React, { FC } from 'react';
import { Menu } from 'utils/types/Menu';
import { MenuLink } from './styled';

interface Props {
  menu: Menu;
}

const MenuItem: FC<Props> = ({ menu }) => {
  return (
    <MenuLink to='#' active={menu.active}>
      {menu.name}
    </MenuLink>
  );
};

export default MenuItem;

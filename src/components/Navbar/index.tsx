import React, { FC } from 'react';
import { Menu } from 'utils/types/Menu';
import MenuItem from './MenuItem';
import { Wrapper } from './styled';
interface Props {
  menuList: Menu[];
}

const Navbar: FC<Props> = ({ menuList }) => {
  return (
    <Wrapper>
      {menuList.map((menu) => (
        <MenuItem key={menu.name} menu={menu} />
      ))}
    </Wrapper>
  );
};

export default Navbar;

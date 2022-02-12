import React, { FC } from 'react';
import { Menu } from 'types/Menu';
import MenuItem from './MenuItem';
interface Props {
  menuList: Menu[];
}

const Navbar: FC<Props> = ({ menuList }) => {
  return (
    <nav>
      <ul>
        {menuList.map((menu) => (
          <MenuItem key={menu.name} menu={menu} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

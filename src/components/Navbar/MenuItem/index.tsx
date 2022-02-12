import React, { FC } from 'react';
import { Menu } from 'types/Menu';
import { Link } from 'react-router-dom';
interface Props {
  menu: Menu;
}

const MenuItem: FC<Props> = ({ menu }) => {
  return (
    <li className={menu.active ? 'active' : ''}>
      <Link to='#'>{menu.name}</Link>
    </li>
  );
};

export default MenuItem;

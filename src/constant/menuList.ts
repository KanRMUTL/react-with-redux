import { Menu } from 'utils/types/Menu';
import routePath from './routePath';

const menuList: Menu[] = [
  {
    name: 'Popular',
    active: true,
    path: routePath.home,
  },
  {
    name: 'Trending',
    active: false,
    path: routePath.trending,
  },
  {
    name: 'TV',
    active: false,
    path: routePath.tv,
  },
  {
    name: 'Playing Now',
    active: false,
    path: routePath.playingNow,
  },
];

export default menuList;

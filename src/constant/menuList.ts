import { Menu } from 'utils/types/Menu';
import routePath from './routePath';

const menuList: Menu[] = [
  {
    name: 'Popular',
    active: true,
    to: routePath.home,
  },
  {
    name: 'Trending',
    active: false,
    to: routePath.trending,
  },
  {
    name: 'TV',
    active: false,
    to: routePath.tv,
  },
  {
    name: 'Playing Now',
    active: false,
    to: routePath.playingNow,
  },
];

export default menuList;

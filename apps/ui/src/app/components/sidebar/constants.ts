import { ROUTES_PATH } from '../../../constants/routes-path';

export interface NavItem {
  url: string;
  id?: number;
  textContent: string;
  currentRoute?: string;
  iconName: string;
  onClick?: () => any;
}

export const SIDEBAR_DATA: NavItem[] = [
  {
    url: ROUTES_PATH.person,
    textContent: 'Cá Nhân',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'ca-nhan'
  },
  {
    url: '/',
    textContent: 'Khám Phá',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'kham-pha'
  },
  {
    url: ROUTES_PATH.zing_charts,
    textContent: '#zingchart',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'zing-chart'
  },
  {
    url: ROUTES_PATH.follow,
    textContent: 'Theo Dõi',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'theo-doi'
  }
];

export const SIDEBAR_DATA_2: NavItem[] = [
  {
    url: ROUTES_PATH.new_release,
    textContent: 'Mới Phát Hành',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'nhac-moi'
  },
  {
    url: ROUTES_PATH.category,
    textContent: 'Thể Loại',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'the-loai'
  },
  {
    url: ROUTES_PATH.top_100,
    textContent: 'Top 100',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'top-100'
  },
  {
    url: ROUTES_PATH.mv,
    textContent: 'MV',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'mvv'
  }
];



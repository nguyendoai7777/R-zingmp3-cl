

export interface NavItem {
  url: string;
  id?: number;
  textContent: string;
  currentRoute?: string;
  iconName: string;
}

export const SIDEBAR_DATA: NavItem[] = [
  {
    url: '/person/all',
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
    url: '/zing-charts',
    textContent: '#zingchart',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'zing-chart'
  },
  {
    url: '/follow',
    textContent: 'Theo Dõi',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'theo-doi'
  }
];

export const SIDEBAR_DATA_2: NavItem[] = [
  {
    url: '/new-release',
    textContent: 'Mới Phát Hành',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'nhac-moi'
  },
  {
    url: '/category',
    textContent: 'Thể Loại',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'the-loai'
  },
  {
    url: '/top-100',
    textContent: 'Top 100',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'top-100'
  },
  {
    url: '/mv',
    textContent: 'MV',
    id: Math.floor(Math.random() * 10000000),
    iconName: 'mv'
  }
];



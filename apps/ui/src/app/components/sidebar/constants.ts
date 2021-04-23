export interface NavItem {
  url: string;
  id?: number;
  textContent: string;
  currentRoute?: string;
}

export const SIDEBAR_DATA: NavItem[] = [
  {
    url: '/person/all',
    textContent: 'Cá Nhân',
    id: Math.floor(Math.random() * 10000000)
  },
  {
    url: '/',
    textContent: 'Khám Phá',
    id: Math.floor(Math.random() * 10000000)
  },
  {
    url: '/zing-charts',
    textContent: '#zingchart',
    id: Math.floor(Math.random() * 10000000)
  },
  {
    url: '/follow',
    textContent: 'Theo Dõi',
    id: Math.floor(Math.random() * 10000000)
  }
];

export const SIDEBAR_DATA_2: NavItem[] = [
  {
    url: '/new-release',
    textContent: 'Mới Phát Hành',
    id: Math.floor(Math.random() * 10000000)
  },
  {
    url: '/category',
    textContent: 'Thể Loại',
    id: Math.floor(Math.random() * 10000000)
  },
  {
    url: '/top-100',
    textContent: 'Top 100',
    id: Math.floor(Math.random() * 10000000)
  },
  {
    url: '/mv',
    textContent: 'MV',
    id: Math.floor(Math.random() * 10000000)
  }
];

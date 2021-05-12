import React, { useEffect } from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import SidebarNavItem from './sidebar-nav-item/sidebar-nav-item';
import { SIDEBAR_DATA, SIDEBAR_DATA_2 } from './constants';
import { Button, IconButton } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';


const Sidebar = () => {
  const [expandBarStatus, setExpandBarStatus] = React.useState<boolean>(true);
  const r = React.useRef<HTMLDivElement>(null);
  const [title, setTitle] = React.useState<string>('');
  const expandBar = () => {
    setExpandBarStatus(!expandBarStatus);
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      const w = window.innerWidth;
      if (w < 1170) {
        r.current.classList.add('sb-responsive');
      } else {

        r.current.classList.remove('sb-responsive');
      }
    });
    window.addEventListener('DOMContentLoaded', () => {
      const w = window.innerWidth;
      if (w >= 1170) {
        r.current.classList.remove('sb-responsive');
      } else {
        r.current.classList.add('sb-responsive');
      }
    });

  }, [expandBarStatus]);

  const changeTitle = (url: string) => {
    setTitle(url);
  };
  useEffect(() => {
    if (!title || title === '/') {
      setTitle('Zing mp3, nghe nhạc tiện ích nhất!');
      document.title = title;
    }
    document.title = title;
  }, [title]);
  return (
    <div className='sidebar'>
      <div className={`sidebar-cover ${expandBarStatus ? 'sb-responsive' : ''}`} ref={r}>
        <Link to='/'>
          <div className='side-logo'>
            <svg className='logo'>
              <use xlinkHref='#logo' />
            </svg>
            <svg className='logo'>
              <use xlinkHref='#short-logo' />
            </svg>
          </div>
        </Link>
        <div>
          {SIDEBAR_DATA.map(e =>
            <SidebarNavItem
              onClick={() => changeTitle(e.url)}
              iconName={e.iconName}
              textContent={e.textContent}
              url={e.url}
              key={e.id}
            />)}
        </div>
        <div className='divide' />
        <div className='side-more app-scroll'>
          {SIDEBAR_DATA_2.map(e =>
            <SidebarNavItem
              iconName={e.iconName}
              textContent={e.textContent}
              url={e.url}
              key={e.id}
              onClick={() => changeTitle(e.url)}
            />
          )}
          <div className='to-login p-3 mb-4'>
            <p>Đăng nhập để khám phá những playlist dành riêng cho chính bạn.</p>
            <Button className='lg-btn'>Đăng nhập</Button>
          </div>
          <Button className='expand-side-btn' onClick={expandBar}>
            {expandBarStatus ? <ArrowForward /> : <ArrowBack />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

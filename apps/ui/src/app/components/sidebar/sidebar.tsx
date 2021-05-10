import React from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import SidebarNavItem from './sidebar-nav-item/sidebar-nav-item';
import { SIDEBAR_DATA, SIDEBAR_DATA_2 } from './constants';
import { Button, IconButton } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-cover'>
        <Link to='/'>
          <div className='side-logo'>
            <svg className='large-side'>
              <use xlinkHref='#logo' />
            </svg>
            <svg className='short-side'>
              <use xlinkHref='#short-logo' />
            </svg>
          </div>
        </Link>
        <div>
          {SIDEBAR_DATA.map(e => <SidebarNavItem iconName={e.iconName} textContent={e.textContent} url={e.url} key={e.id} />)}
        </div>
        <div className='divide' />
        <div className='side-more app-scroll'>
          {SIDEBAR_DATA_2.map(e =>
            <SidebarNavItem
              iconName={e.iconName}
              textContent={e.textContent}
              url={e.url}
              key={e.id} />
          )}
          <div className='to-login p-3 large-side mb-4'>
            <p>Đăng nhập để khám phá những playlist dành riêng cho chính bạn.</p>
            <Button className='lg-btn'>Đăng nhập</Button>
          </div>
          <Button className='expand-side-btn'>
            <ArrowForward  />
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;

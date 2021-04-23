import React from 'react';
import './sidebar.scss';
import { Link, useParams } from 'react-router-dom';
import SidebarNavItem from './sidebar-nav-item/sidebar-nav-item';
import { SIDEBAR_DATA, SIDEBAR_DATA_2 } from './constants';
import { Button } from '@material-ui/core';
import { getEndPointUrl } from '../../module/module';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-cover'>
        <Link to='/'>
          <div className='side-logo'>
            <svg>
              <use xlinkHref='#logo' />
            </svg>
          </div>
        </Link>
        <div>
          {SIDEBAR_DATA.map(e => <SidebarNavItem  textContent={e.textContent} url={e.url} key={e.id} />)}
        </div>
        <div className='divide' />
        <div>
          {SIDEBAR_DATA_2.map(e => <SidebarNavItem  textContent={e.textContent} url={e.url} key={e.id} />)}
        </div>
        <div className='to-login p-3'>
          <p>Đăng nhập để khám phá những playlist dành riêng cho chính bạn.</p>
          <Button className='lg-btn'>Đăng nhập</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import './navbar.scss';
import { IconButton } from '@material-ui/core';
import { ArrowBack, ArrowForward, Search, Publish, Settings, Person } from '@material-ui/icons';

const placeholder = 'Nhập tên bài hát, nghệ sĩ hoặc MV...';
const Navbar = () => {

  return (
    <div className='appbar px-4 py-3'>
      <IconButton><ArrowBack /></IconButton>
      <IconButton><ArrowForward /></IconButton>
      <div className='search-box d-flex align-items-center'>
        <Search />
        <input type='text' className='search-input' placeholder={placeholder} />
      </div>
      <div className='ms-auto d-flex align-items-center'>
        <div className='icon-nav-box fix-image'>
          <IconButton>
            <svg className="theme-box"><use xlinkHref="#theme"/> </svg>
          </IconButton>
        </div>
        <div className='icon-nav-box'>
          <IconButton><Publish /></IconButton>
        </div>
        <div className='icon-nav-box'>
          <IconButton><Settings /></IconButton>
        </div>
        <div className='icon-nav-box'>
          <IconButton><Person /></IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

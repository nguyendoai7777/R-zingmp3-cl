import React, { useEffect } from 'react';
import './navbar.scss';
import { Button, ClickAwayListener, IconButton, Switch } from '@material-ui/core';
import { ArrowBack, ArrowForward, Search, Publish, Settings, Person } from '@material-ui/icons';

const placeholder = 'Nhập tên bài hát, nghệ sĩ hoặc MV...';
const Navbar = () => {
  const [showSettingState, setShowSettingState] = React.useState<boolean>(false);
  const [animate, setAnimate] = React.useState<boolean>(false);
  const toggleOption = () => {
    setAnimate(!animate);
    setShowSettingState(!showSettingState);
  };

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
            <svg className='theme-box'>
              <use xlinkHref='#theme' />
            </svg>
          </IconButton>
        </div>
        <div className='icon-nav-box'>
          <IconButton><Publish /></IconButton>
        </div>

        <ClickAwayListener onClickAway={() => setShowSettingState(false)}>
          <div className='st icon-nav-box'>
            <IconButton onClick={toggleOption}><Settings /></IconButton>
            {
              showSettingState && <div className={`option-wrapper op pt`}>
                <div className='ang ang-home'>
                  <Button className='option-item'>
                    <div>Hình nền</div>
                    <Switch />
                  </Button>
                  <Button className='option-item'>
                    <div>Chỉ phát nhạc nền</div>
                    <Switch />
                  </Button>
                  <Button disabled className='option-item' style={{ height: '38px' }}>
                    <div>Chọn cỡ chữ phát nhạc</div>
                  </Button>
                </div>
              </div>
            }
          </div>
        </ClickAwayListener>
        <div className='icon-nav-box'>
          <IconButton><Person /></IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

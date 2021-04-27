import React, { useState } from 'react';
import './right-sidebar.scss';
import { Tabs, Tab, IconButton, Switch } from '@material-ui/core';
import { AccessAlarm, MoreHoriz } from '@material-ui/icons';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { SONG_LIST } from './data';
import TabPanel from './tabpanel';
import SelectSong from './select-song/select-song';
import { Link, useParams } from 'react-router-dom';
import { SongControl } from './interface';


function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const PurpleSwitch = withStyles({
  switchBase: {
    color: '#7200A1',
    '&$checked': {
      color: '#c63bff !important'
    },
    '&$checked + $track': {
      backgroundColor: '#c63bff !important'
    }
  },
  checked: {},

  track: {}
})(Switch);
const RightSidebar = () => {
  const [tabsValue, setTabsValue] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabsValue(newValue);
  };
  const [currentIndexSong, setCurrentIndexSong] = useState(null);
  const [playingList, setPlayingList] = useState([]);
  const [playListSuggest, setPlayListSuggest] = useState(SONG_LIST);
  const [autoPlay, setAutoPlay] = useState(true);
  const onChoseSong = (song: SongControl) => {
    setPlayingList([...playingList, song]);
    const newList = playListSuggest.filter(a => a.songName !== song.songName);
    setPlayListSuggest(newList);
    playListSuggest.forEach(el => {
      el.isActive = false;
    });
  };
  const detectAutoPlayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutoPlay(!autoPlay);
  };
  return (
    <div className='right-sidebar pt-2'>
      <div className='side-wrapper p-2'>
        <div className='side-action'>
          <div className='tabs-control'>
            <Tabs
              value={tabsValue}
              onChange={handleTabsChange}
              textColor='primary'
            >
              <Tab label='Danh sách phát' {...a11yProps(0)} />
              <Tab label='Nghe gần đây' {...a11yProps(1)} />
            </Tabs>
          </div>
          <div className='icon-side-box'>
            <IconButton><AccessAlarm /></IconButton>
          </div>
          <div className='icon-side-box'>
            <IconButton><MoreHoriz /></IconButton>
          </div>
        </div>
        <TabPanel value={tabsValue} index={0}>
          {
            playingList.length > 0 && <div className='play-list'>
              {
                playingList.map((e, index) => <SelectSong
                    songArtist={e.songArtist}
                    songName={e.songName}
                    thumb={e.thumb}
                    key={Math.random()}
                    isActive={currentIndexSong === index}
                    chooseThisSong={() => {
                      setCurrentIndexSong(index);

                    }}
                  />
                )
              }
            </div>
          }
          <div className='divided'>
            <div className='divided-title'>Tiếp theo</div>
            <div className='d-flex divided-text'>
              <p className='me-3'>Từ playlist</p>
              <Link to='top-100-pop'><p className='purple-nav'>Top 100 âu mỹ hay nhất</p></Link>
            </div>
          </div>
          {
            playListSuggest.map((e, index) => <SelectSong
                songArtist={e.songArtist}
                songName={e.songName}
                thumb={e.thumb}
                key={Math.random()}
                isActive={currentIndexSong === index}
                chooseThisSong={() => {
                  setCurrentIndexSong(index);
                  onChoseSong(e);
                }}
              />
            )
          }
          <div className='d-flex suggestion-box align-items-center'>
            <b>Gợi ý</b>
            <div className='ms-auto me-1 d-flex align-items-center'>
              <span className='auto-play'> Tự động phát: </span>
              <PurpleSwitch
                checked={autoPlay}
                onChange={detectAutoPlayChange}
                size='small'
                color='primary' />
            </div>
            <IconButton className='refresh'>
              <svg className='refresh-icon'>
                <use xlinkHref='#refresh' />
              </svg>
            </IconButton>
          </div>
          {
            playListSuggest.map((e, index) => <SelectSong
                songArtist={e.songArtist}
                songName={e.songName}
                thumb={e.thumb}
                key={Math.random()}
                isActive={currentIndexSong === index}
                chooseThisSong={() => {
                  setCurrentIndexSong(index);
                  onChoseSong(e);
                }}
              />
            )
          }
        </TabPanel>
        <TabPanel value={tabsValue} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>
  );
};

export default RightSidebar;

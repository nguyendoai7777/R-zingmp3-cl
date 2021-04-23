import React, { useState } from 'react';
import './right-sidebar.scss';
import { Tabs, Tab, IconButton } from '@material-ui/core';
import TabPanel from './tabpanel';
import { AccessAlarm, MoreHoriz } from '@material-ui/icons';
import SelectSong from './select-song/select-song';
import { SONG_LIST } from './data';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const RightSidebar = () => {
  const [tabsValue, setTabsValue] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabsValue(newValue);
  };
  const [currentIndexSong, setCurrentIndexSong] = useState(null);

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
          <div className='play-list'>
            {
              SONG_LIST.map((e, index) => <SelectSong
                  songArtist={e.songArtist}
                  songName={e.songName}
                  thumb={e.thumb}
                  key={Math.random()}
                  isActive={ currentIndexSong === index}
                  chooseThisSong={() => {
                    setCurrentIndexSong(index);
                  }}
                />
              )
            }
          </div>
        </TabPanel>
        <TabPanel value={tabsValue} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>
  );
};

export default RightSidebar;

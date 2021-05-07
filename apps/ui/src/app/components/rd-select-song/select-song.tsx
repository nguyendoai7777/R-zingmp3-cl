import React, { useState } from 'react';
import { FavoriteBorder, MoreHoriz, PlayArrow } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { SongProfile } from '../right-sidebar/interface';


const RandomSelectSong: React.FC<SongProfile> = ({ chooseThisSong, songName, songArtist, thumb, isActive }) => {
  return (
    <div className={`song-wrap p-2 d-flex ${isActive ? 'playing-song' : ''}`}>
      <div className='song-thumb' onClick={chooseThisSong}>
        <div className='thumb-overlay'>
          <PlayArrow />
        </div>
        <img src={thumb} alt='' />
      </div>
      <div className='song-info'>
        <div className='song-name'>{songName}</div>
        <div className='song-artist d-flex'>
          {
            songArtist.map((el, i) => <Link key={Math.random()} to={el.profileUrl}>
              {i === 0 ? '' : (',  ')}{el.artistName}
            </Link>)
          }
        </div>
        <div className='song-actions'>
          <IconButton className='small-action'>
            <svg>
              <use xlinkHref='#micro' />
            </svg>
          </IconButton>
          <IconButton className='small-action'>
            <MoreHoriz fontSize={'small'} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default RandomSelectSong;

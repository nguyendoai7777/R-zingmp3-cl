import React from 'react';
import './album-group.scss';
import { Link } from 'react-router-dom';
import { Icon, IconButton } from '@material-ui/core';
import { FavoriteBorder, MoreHoriz } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { OnPlay } from '../../../interfaces/action.interface';

const AlbumGroup = () => {
  const isPlay = useSelector<OnPlay, OnPlay['isPlaying']>((state) => state.isPlaying);
  const dispatch = useDispatch();

  return (
    <div className='album-group'>
      <div className='album-thumb'>
        <div className='album-img'>
          <img src='https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/d/d/0/2dd000bcd585f01edd235c0c3f21c2f9.jpg' alt='' />
        </div>
        <div className='album-overlay d-flex align-items-center'>
          <div className='d-flex justify-content-around w-100'>
            <div className='media-song-actions d-flex align-items-center'>
              <IconButton className='l small-action'>
                <FavoriteBorder fontSize={'small'} />
              </IconButton>
              <IconButton className='c no-padding'>
                <div className='group-controller '>
                  <svg>
                    {!isPlay ? <use xlinkHref='#play' /> : <use xlinkHref='#pause' />}
                  </svg>
                </div>
              </IconButton>
              <IconButton className='r small-action'>
                <MoreHoriz fontSize={'small'} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Link className='album-nav' to='/'>
        Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất
      </Link>
    </div>
  );
};

export default AlbumGroup;

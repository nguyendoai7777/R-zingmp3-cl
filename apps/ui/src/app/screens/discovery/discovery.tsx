import React, { useEffect } from 'react';
import './discovery.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SlideGallery from '../../components/slide-gallery/slide-gallery';
import GroupBox from '../../components/group/group';
import { IconButton } from '@material-ui/core';
import { FavoriteBorder, MoreHoriz } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OnPlay } from '../../../interfaces/action.interface';
import { ALBUM_LIST } from './data';
import ReactOwlCarousel from 'react-owl-carousel';
import { randomKey } from '../../module/module';
import $ from 'jquery';


const Discovery = () => {
  const isPlay = useSelector<OnPlay, OnPlay['isPlaying']>((state) => state.isPlaying);
  const dispatch = useDispatch();
  const options = {
    item: 3,
    autoplay: true,
    loop: true
  };
  return (
    <div className='dc'>
      <SlideGallery />
      <div className='dc-body'>
        <GroupBox title='Có thể bạn sẽ thích đấy'>
          {ALBUM_LIST.map((el) => <div key={randomKey()} className='album-group'>
            <div className='album-thumb'>
              <div className='album-img'>
                <img src={el.thumbnailUrl} alt='' />
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
            <Link className='album-nav' to={el.nav.url}>{el.nav.title}</Link>
          </div>)}
        </GroupBox>
        <GroupBox title='Nghe Gần Đây'>
          {ALBUM_LIST.map((el) => <div key={randomKey()} className='album-group'>
            <div className='album-thumb'>
              <div className='album-img'>
                <img src={el.thumbnailUrl} alt='' />
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
            <Link className='album-nav' to={el.nav.url}>{el.nav.title}</Link>
          </div>)}
        </GroupBox>
        <div className='rl'>
          <GroupBox title='Mới Phát Hành'>
            <ReactOwlCarousel
              navClass={['owl-actions owl-prev', 'owl-actions owl-next']}
              autoplay={true}
              loop={true}
              nav={true}
              autoplaySpeed={1000}
              autoplayTimeout={6000}
              smartSpeed={500}
              navText={[
                '<div class="px-3"><svg class="owl-icon"><use xlink:href="#ios-prev"/></svg></div>',
                '<div class="px-3"><svg class="owl-icon"><use xlink:href="#ios-next"/></svg></div>'
              ]}
              dotsEach={true}
            >
              {ALBUM_LIST.map((el, i) => <div key={randomKey()} className='new-rl-wrapper'>
                <div className='new-rl-box'>
                  <div className='d-flex'>
                    <div className='rl-thumb'>
                      <img src={el.thumbnailUrl} alt='' />
                    </div>
                    <div className='ms-2 flex-grow-1 rl-info d-flex flex-column justify-content-between'>
                      <div>
                        <div className='title'>Love ROSIE</div>
                        <i className='author'>TBT</i>
                      </div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <span className='order'>#{i + 1}</span>
                        <span>1999</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </ReactOwlCarousel>
          </GroupBox>
        </div>
      </div>
    </div>
  );
};

export default Discovery;

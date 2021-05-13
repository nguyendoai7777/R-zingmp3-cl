import React from 'react';
import './carousel-expand-item.scss';
import { IconButton } from '@material-ui/core';
import { FavoriteBorder, MoreHoriz } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { OnPlay } from '../../../../interfaces/action.interface';
import Slider from 'react-slick';
import { SlickCarouselOption } from '../../../../interfaces/slick-carousel-option.interface';

const sts: SlickCarouselOption = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  autoplay: true,
  slidesToScroll: 1,
  cssEase: 'linear',
  centerMode: true,
};

const CarouselExpandItem = () => {
  const isPlay = useSelector<OnPlay, OnPlay['isPlaying']>((state) => state.isPlaying);

  return (
    <Slider {...sts}>
      <div className='cxi-wrapper'>
        <div className='cxi-box'>
          <div className='album-thumb'>
            <div className='album-img'>
              <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/avatars/e/1/e12e28f870a04329880c22d8c9b91848_1410346823.jpg' alt='' />
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
        </div>
      </div>
      <div className='cxi-wrapper'>
        <div className='cxi-box'>
          <div className='album-thumb'>
            <div className='album-img'>
              <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/e/0/e0df356e3e24b946529e98c9ed001bac_1416803186.jpg' alt='' />
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
        </div>
      </div>
      <div className='cxi-wrapper'>
        <div className='cxi-box'>
          <div className='album-thumb'>
            <div className='album-img'>
              <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/7/5/75bb9f0f27f05cf7f686e5b27451e9ca_1415354642.jpg' alt='' />
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
        </div>
      </div>
      <div className='cxi-wrapper'>
        <div className='cxi-box'>
          <div className='album-thumb'>
            <div className='album-img'>
              <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/9/2/9232c4c99c30f665e9326c8bbbcebc0e_1475749603.jpg' alt='' />
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
        </div>
      </div>
      <div className='cxi-wrapper'>
        <div className='cxi-box'>
          <div className='album-thumb'>
            <div className='album-img'>
              <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/avatars/e/1/e12e28f870a04329880c22d8c9b91848_1410346823.jpg' alt='' />
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
        </div>
      </div>
      <div className='cxi-wrapper'>
        <div className='cxi-box'>
          <div className='album-thumb'>
            <div className='album-img'>
              <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/e/0/e0df356e3e24b946529e98c9ed001bac_1416803186.jpg' alt='' />
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
        </div>
      </div>
      <div className='cxi-wrapper'>
        <div className='cxi-box'>
          <div className='album-thumb'>
            <div className='album-img'>
              <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/7/5/75bb9f0f27f05cf7f686e5b27451e9ca_1415354642.jpg' alt='' />
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
        </div>
      </div>
      <div className='cxi-wrapper'>
        <div className='cxi-box'>
          <div className='album-thumb'>
            <div className='album-img'>
              <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/9/2/9232c4c99c30f665e9326c8bbbcebc0e_1475749603.jpg' alt='' />
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
        </div>
      </div>
      <div className='cxi-wrapper'>
      <div className='cxi-box'>
        <div className='album-thumb'>
          <div className='album-img'>
            <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/avatars/e/1/e12e28f870a04329880c22d8c9b91848_1410346823.jpg' alt='' />
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
      </div>
    </div>
      <div className='cxi-wrapper'>
        <div className='cxi-box'>
          <div className='album-thumb'>
            <div className='album-img'>
              <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/e/0/e0df356e3e24b946529e98c9ed001bac_1416803186.jpg' alt='' />
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
        </div>
      </div>
      <div className='cxi-wrapper'>
        <div className='cxi-box'>
          <div className='album-thumb'>
            <div className='album-img'>
              <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/7/5/75bb9f0f27f05cf7f686e5b27451e9ca_1415354642.jpg' alt='' />
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
        </div>
      </div>
      <div className='cxi-wrapper'>
        <div className='cxi-box'>
          <div className='album-thumb'>
            <div className='album-img'>
              <img src='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/9/2/9232c4c99c30f665e9326c8bbbcebc0e_1475749603.jpg' alt='' />
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
        </div>
      </div>
    </Slider>
  );
};
export default CarouselExpandItem;

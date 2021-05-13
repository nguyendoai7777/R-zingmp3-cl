import React, { useEffect, useState } from 'react';
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
import SelectSong from '../../components/right-sidebar/select-song/select-song';
import { SONG_LIST } from '../../components/right-sidebar/data';
import { SongProfile } from '../../components/right-sidebar/interface';
import MixChoice from './mix-choice/mix-choice';

const url = '../../../assets/audio/giua-dai-lo-dong-tay.mp3';
const mp3 = new Audio(url);


const Discovery = () => {
  const [rdList, setRdList] = React.useState(SONG_LIST);
  const [currentIndexSong, setCurrentIndexSong] = useState(null);

  const isPlay = useSelector<OnPlay, OnPlay['isPlaying']>((state) => state.isPlaying);
  const dispatch = useDispatch();
  const onChoseSong = (song: SongProfile) => {
    rdList.forEach(el => {
      el.isActive = false;
    });
  };
  /*  useEffect(() => {
      if (mp3) {
        mp3.play();
        mp3.volume = 1;
      }
    }, []);*/
  return (
    <div className='dc'>
      <SlideGallery />
      <div className='dc-body'>
        <GroupBox title='Có thể bạn sẽ thích đấy'>
          {ALBUM_LIST.map((el) =>
            <div key={randomKey()} className='album-group'>
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
        <div className='rl mb-3'>
          <GroupBox title='Mới Phát Hành'>
            <ReactOwlCarousel
              navClass={['owl-actions owl-prev', 'owl-actions owl-next']}
              autoplay={false}
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
        <div className='rd-list d-flex flex-wrap justify-content-between'>
          {rdList.map((el, index) => <SelectSong
            thumb={el.thumb}
            songName={el.songName}
            songArtist={el.songArtist}
            isMain={false}
            key={Math.random()}
            isActive={currentIndexSong === index}
            chooseThisSong={() => {
              setCurrentIndexSong(index);
              onChoseSong(el);
            }}
          />)}
        </div>
        <GroupBox title={'Mix Zing Choice'}>
          <div className='choice'>
            <MixChoice />
          </div>
        </GroupBox>
      </div>
    </div>
  );
};

export default Discovery;

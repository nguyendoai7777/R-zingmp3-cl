import React, { useEffect, useRef } from 'react';
import './media-player.scss';
import { IconButton, Slider, Tooltip } from '@material-ui/core';
import { FavoriteBorder, MoreHoriz, VolumeOff, VolumeUp } from '@material-ui/icons';
import MyTooltip from '../tooltip/tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { OnPlay } from '../../../interfaces/action.interface';


const MediaPlayer = () => {

    const [currentVolume, setCurrentVolume] = React.useState<number>(80);
    const [isMute, setIsMute] = React.useState<boolean>(false);
    const [randomState, setRandomState] = React.useState<boolean>(false);
    //! audio controller
    const [timePlaying, setTimePlaying] = React.useState<number>(0);
    const [audioTimerDuration, setAudioTimerDuration] = React.useState<number>(null);
    const [durStartTime, setDurStartTime] = React.useState<string>(null);
    const audioRef = useRef<HTMLAudioElement>();
    const audioDuration = (time) => {

      const hours = ('0' + Math.floor(time / 3600));
      const ch = Number(hours);
      const minutes = `${Math.floor(time / 60)}`.length <= 1 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
      const seconds = ('0' + Math.floor(time - Math.floor(time / 60) * 60)).slice(-2);
      return ch !== 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
    };
    // change range
    const handleMediaControlTime = (event: never, newValue: number | number[]) => {
      setTimePlaying(newValue as number);
      console.log(audioRef.current.currentTime);
      audioRef.current.currentTime = timePlaying;
      const startTime = audioDuration(timePlaying);
      setDurStartTime(startTime);
    };

    const isPlay = useSelector<OnPlay, OnPlay['isPlaying']>((state) => state.isPlaying);
    const dispatch = useDispatch();

    // set value range
    const handleVolume = (event: never, newValue: number | number[]) => {
      setCurrentVolume(newValue as number);
    };


    const volumeControl = () => {
      if (currentVolume === 0) {
        setCurrentVolume(100);
      }
      setIsMute(!isMute);
    };
    const setRandom = () => {
      setRandomState(!randomState);
    };
    const setPlay = () => {
      dispatch({ type: 'TOGGLE_PLAYING_SONG', payload: isPlay });
    };


    useEffect(() => {
      setIsMute(currentVolume < 0);
    }, [currentVolume]);
    useEffect(() => { // to set total duration of song
      audioRef.current.addEventListener('loadedmetadata', (e) => {
        setAudioTimerDuration(audioRef.current.duration);
      });
      console.log(Math.floor(audioTimerDuration));
      const startTime = audioDuration(timePlaying);
      setDurStartTime(startTime);
      audioRef.current.addEventListener('timeupdate', _ => {
        const current = audioRef.current.currentTime;
        const startTime = audioDuration(current);
        setDurStartTime(startTime);
        setTimePlaying(current);
        console.log('dang chay ne: ',  Math.floor(current), Math.floor(audioTimerDuration));
        if (Math.floor(current) === Math.floor(audioTimerDuration)) {
          console.log('=== roi```````````');
          dispatch({ type: 'TOGGLE_PLAYING_SONG', payload: false });
        }
      });
    }, []);
    useEffect(() => {
      if (isPlay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }, [isPlay]);

    return (
      <div className='media-player-wrapper'>
        <div className='d-flex px-4 py-2 align-items-center'>
          <div className='media-info d-flex align-items-center'>
            <div className='media-thumb playing'>
              <img src='https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg' alt='' />
            </div>
            <div className='media-detail-info ms-3'>
              <div className='song-name'>Sắp tới sẽ là tao</div>
              <div className='song-artist'>Mr. DxD</div>
            </div>
            <div className='media-song-actions ms-2'>
              <IconButton className='small-action'>
                <FavoriteBorder fontSize={'small'} />
              </IconButton>
              <IconButton className='small-action'>
                <MoreHoriz fontSize={'small'} />
              </IconButton>
            </div>
          </div>
          <div className='media-controls'>
            <div className='control-group-btn'>
              <div className='icon-btn-group d-flex align-items-center'>
                <MyTooltip title={`${randomState ? 'Bật' : 'Tắt'} phát ngẫu nhiên`}>
                  <IconButton style={{ transform: 'rotate(90deg)' }} onClick={setRandom}>
                    <svg className={`icon-control ${randomState ? 'icon-control-active' : ''}`} height={22} width={22}>
                      <use xlinkHref='#random' />
                    </svg>
                  </IconButton>
                </MyTooltip>
                <MyTooltip title='Phát lại bài vừa qua' arrow>
                  <IconButton>
                    <svg className='control-size icon-control'>
                      <use xlinkHref='#pn' />
                    </svg>
                  </IconButton>
                </MyTooltip>
                <div className='main-control'>
                  <IconButton onClick={setPlay}>
                    <svg className='main-icon-btn icon-control'>
                      {!isPlay ? <use xlinkHref='#play' /> : <use xlinkHref='#pause' />}
                    </svg>
                  </IconButton>
                </div>
                <MyTooltip title='Phát bài kế tiếp' arrow>
                  <IconButton style={{ transform: 'rotate(180deg)' }}>
                    <svg className='control-size icon-control'>
                      <use xlinkHref='#pn' />
                    </svg>
                  </IconButton>
                </MyTooltip>
                <MyTooltip title='Lặp lại ' arrow>
                  <IconButton>
                    <svg className='control-size icon-control'>
                      <use xlinkHref='#loop' />
                    </svg>
                  </IconButton>
                </MyTooltip>
              </div>
              <div className='d-flex align-items-center justify-content-center'>
                <div className='played-time pe-3'>{durStartTime}</div>
                <div className='w-50 align-items-center d-flex'>
                  <Slider
                    value={timePlaying}
                    onChange={handleMediaControlTime}
                    max={Math.floor(audioTimerDuration)}
                    aria-labelledby='continuous-slider'
                  />
                  <audio controls id='app-audio' ref={audioRef} style={{ display: 'none' }}>
                    <source src='../../../assets/audio/tim-hanh-tinh-khac.flac' />
                  </audio>
                </div>
                <div className='played-time ps-3'>{audioDuration(audioTimerDuration)}</div>
              </div>
            </div>
          </div>
          <div className='media-action d-flex align-items-center'>
            <MyTooltip title='MV' arrow>
              <IconButton>
                <svg className='control-size-huge icon-control'>
                  <use xlinkHref='#mv' />
                </svg>
              </IconButton>
            </MyTooltip>
            <MyTooltip title='Xem lời bài hát'>
              <IconButton>
                <svg className='control-size-huge icon-control'>
                  <use xlinkHref='#micro' />
                </svg>
              </IconButton>
            </MyTooltip>
            <div className='d-flex align-items-center'>
              <IconButton onClick={volumeControl}>
                {currentVolume * (isMute ? 0 : 1) > 0 ?
                  <VolumeUp style={{ fontSize: '30px' }} /> :
                  <VolumeOff style={{ fontSize: '30px' }} />}
                {/*       {!volumeController && <VolumeOff style={{ fontSize: '30px' }} />}*/}
              </IconButton>
              <div style={{ width: '130px' }} className='d-flex align-items-center ms-2'>
                <Slider
                  value={currentVolume * (isMute ? 0 : 1)}
                  onChange={handleVolume}
                  aria-labelledby='continuous-slider'
                />

              </div>
            </div>
            <MyTooltip title='Toàn màn hình' placement='top' arrow>
              <IconButton>
                <svg className='control-size icon-control'>
                  <use xlinkHref='#expand' />
                </svg>
              </IconButton>
            </MyTooltip>
          </div>
        </div>
      </div>
    );
  }
;

export default MediaPlayer;

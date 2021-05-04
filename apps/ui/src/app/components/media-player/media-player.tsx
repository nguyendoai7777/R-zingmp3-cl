import React, { useEffect, useRef } from 'react';
import './media-player.scss';
import { IconButton, Slider, Tooltip } from '@material-ui/core';
import { FavoriteBorder, MoreHoriz, VolumeOff, VolumeUp } from '@material-ui/icons';
import MyTooltip from '../tooltip/tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { OnPlay } from '../../../interfaces/action.interface';
import { SONG_LIST } from '../right-sidebar/data';


const MediaPlayer = () => {
    const [currentVolume, setCurrentVolume] = React.useState<number>(80);
    const [isMute, setIsMute] = React.useState<boolean>(false);
    const [randomState, setRandomState] = React.useState<boolean>(false);
    const [loopState, setLoopState] = React.useState<number>(0);
    const subMedia = React.useRef<HTMLDivElement>();
    //! start audio controller
    const [timePlaying, setTimePlaying] = React.useState<number>(0);
    const [audioTimerDuration, setAudioTimerDuration] = React.useState<number>(0);
    const audioRef = useRef<HTMLAudioElement>();
    const audioDuration = (time) => {
      const hours = ('0' + Math.floor(time / 3600));
      const ch = Number(hours);
      const minutes = ('0' + Math.floor((time - ch * 3600) / 60)).slice(-2);
      const seconds = ('0' + Math.floor(time - Math.floor(time / 60) * 60)).slice(-2);
      return ch !== 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
    };

    const handleMediaControlTime = (event: never, newValue: number | number[]) => {
      const val = newValue as number;
      setTimePlaying(val);
      audioRef.current.currentTime = val;
    };

    const isPlay = useSelector<OnPlay, OnPlay['isPlaying']>((state) => state.isPlaying);
    const dispatch = useDispatch();

    const setPlay = () => {
      dispatch({ type: 'TOGGLE_PLAYING_SONG', payload: isPlay });
    };
    useEffect(() => {
      if (isPlay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }, [isPlay]);
    //! end audio controller

    //! start volume
    const handleVolume = (event: never, newValue: number) => {
      setCurrentVolume(newValue as number);
      audioRef.current.volume = newValue / 100;
    };
    const toggleVolume = () => {
      if (currentVolume === 0) {
        setCurrentVolume(100);
      }
      setIsMute(!isMute);
    };
    useEffect(() => {
      console.log(isMute);
      if (isMute) {
        audioRef.current.volume = 0;
      } else {
        audioRef.current.volume = currentVolume * ((isMute ? 0 : 1) / 100);
      }
      if (currentVolume > 60) {
        subMedia.current.classList.add('volume-warning');
      } else {
        subMedia.current.classList.remove('volume-warning');
      }
    }, [currentVolume, isMute]);
    useEffect(() => {
      setIsMute(currentVolume < 0);

    }, [currentVolume]);

    //! end volume
    const setRandom = () => {
      setRandomState(!randomState);
    };
    const setLoop = () => {
      setLoopState((loopState + 1) % 3);
      console.log(loopState);
    };
    // set value range

    useEffect(() => { // to set total duration of song
      audioRef.current.addEventListener('loadedmetadata', (_) => {
        const dur = Math.floor(audioRef.current.duration);
        setAudioTimerDuration(dur);
      });
      audioRef.current.addEventListener('timeupdate', _ => {
        const current = audioRef.current.currentTime;
        setTimePlaying(current);
        const dur = Math.floor(audioRef.current.duration);
        if (Math.floor(current) === dur) {
          dispatch({ type: 'TOGGLE_PLAYING_SONG', payload: false });
        }
      });
      console.log(subMedia);
    }, [dispatch]);


    return (
      <div className='media-player-wrapper'>
        <div className={`d-flex px-4 py-3 align-items-center ${isPlay ? 'spl' : ''}`}>
          <div className='media-info d-flex align-items-center'>
            <div className={`media-thumb ${isPlay ? 'playing' : ''}`}>
              <div className='thumbnail'>
                <img src={SONG_LIST[0].thumb} alt='' />
              </div>
            </div>
            <div className='media-detail-info ms-3'>
              <div className='song-name'>{SONG_LIST[0].songName}</div>
              <div className='song-artist'>{SONG_LIST[0].songArtist[0].artistName}</div>
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
                <MyTooltip title={loopState === 0 ? 'Không lặp lại' : loopState === 1 ? 'Lặp lại toàn bộ' : 'Lặp lại 1 bài'} arrow>
                  <IconButton onClick={setLoop}>
                    <svg className='control-size icon-control'>
                      <use xlinkHref={loopState === 0 ? '#loop' : loopState === 1 ? '#loop-active' : '#loop-1'} />
                    </svg>
                  </IconButton>
                </MyTooltip>
              </div>
              <div className='d-flex align-items-center justify-content-center'>
                <div className={`played-time pe-3 ${isPlay ? 'playing' : ''}`}>{audioDuration(timePlaying)}</div>
                <div className='w-50 align-items-center d-flex'>
                  <Slider
                    value={timePlaying}
                    onChange={handleMediaControlTime}
                    max={Math.floor(audioTimerDuration)}
                    aria-labelledby='continuous-slider'
                  />
                  <audio controls id='app-audio' ref={audioRef} style={{ display: 'none' }}>
                    <source src={SONG_LIST[0].songArtist[0].songUrl} />
                  </audio>
                </div>
                <div className='played-time ps-3'>{audioDuration(audioTimerDuration)}</div>
              </div>
            </div>
          </div>
          <div className='media-sub-actions d-flex align-items-center'>
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
              <IconButton onClick={toggleVolume} className={`${currentVolume > 60 ? 'volume-warning-btn' : ''} `}>
                {currentVolume * (isMute ? 0 : 1) > 0 ?
                  <VolumeUp style={{ fontSize: '30px' }} /> :
                  <VolumeOff style={{ fontSize: '30px' }} />}
                {/*       {!volumeController && <VolumeOff style={{ fontSize: '30px' }} />}*/}
              </IconButton>
              <div ref={subMedia} style={{ width: '130px' }} className='d-flex align-items-center ms-2'>
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

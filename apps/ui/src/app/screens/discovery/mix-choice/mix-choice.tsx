import React from 'react';
import './mix-choice.scss';
import { Link } from 'react-router-dom';
import { Icon, IconButton } from '@material-ui/core';
import { MoreHoriz, PlayArrow } from '@material-ui/icons';
import { CHOICE_LIST, ChoiceSong } from '../data';
import MyTooltip from '../../../components/tooltip/tooltip';
import { randomKey } from '../../../module/module';

const ChoiceItem: React.FC<ChoiceSong> = ({ name, index }) => {
  return (
    <div className='choice-item'>
      <div className='stt small-icon d-flex align-items-center'>
        <p className=' choice-text'>{index}.</p>
        <IconButton className='ControlAction'>
          <svg>
            <use xlinkHref='#play' />
          </svg>
        </IconButton>
      </div>
      <div className='ps-2 choice-text'>{name}</div>
      <div className='ms-auto choice-control small-icon no-wrap'>
        <MyTooltip title='Phát cùng lời bài hát' arrow placement='top'>
          <IconButton className=''>
            <svg className='choice-icon'>
              <use xlinkHref='#micro' />
            </svg>
          </IconButton>
        </MyTooltip>
        <MyTooltip title='Khác' arrow placement='top'>
          <IconButton className=''>
            <MoreHoriz fontSize={'small'} />
          </IconButton>
        </MyTooltip>
      </div>
    </div>
  );
};

const MixChoice = () => {
  return (
    <div className='choice-wrapper d-flex p-3'>
      <div className='thumbnail'>
        <img src='https://photo-playlist-zmp3.zadn.vn/mixartist?src=HavwqN7EvKCI1og5AfZbHm1SVTWzcBT71LmlapZMi4PNMId0DuBaH0rTUP4mZ-15NrLxnJ2Fx45GKMoRUTtW1m92AyylcAT5L3JAHcx_2fxMhWLDhMc9YP7wKmlgAz_qtQm81o9z&size=thumb/240_240' alt='' />
      </div>
      <div className='info d-flex flex-column justify-content-between'>
        <div>
          <div className='choice-title'>
            <Link to='/asdsdfj'>Những bài mày được zing cố tình suggest</Link>
          </div>
          <p>Vì mày nghe thằng này thường xuyên, nhiều... </p>
        </div>
        <i>hơn 30 bài</i>
      </div>
      <div className=''>
        <div className='d-flex flex-wrap ps-2'>
          {CHOICE_LIST.map((el, i) => <ChoiceItem key={randomKey()} name={el.name} index={i + 1} />)}
        </div>
      </div>
    </div>
  );
};

export default MixChoice;

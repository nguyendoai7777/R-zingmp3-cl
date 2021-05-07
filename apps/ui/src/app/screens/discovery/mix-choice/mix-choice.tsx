import React from 'react';
import './mix-choice.scss';
import { Link } from 'react-router-dom';



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
      <div className='flex-grow-1'>
        <div className='d-flex flex-wrap px-2'>

        </div>
      </div>
    </div>
  );
};

export default MixChoice;

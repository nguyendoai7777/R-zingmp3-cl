import React, { useEffect } from 'react';
import './slide-gallery.scss';
import { IconButton } from '@material-ui/core';
import { GALLERY_DATA } from './data';

const SlideGallery = () => {
  const galleryParent = React.useRef(null);
  useEffect(() => {
    const gallery = document.querySelectorAll('.gallery-data');
    gallery[1].classList.add('item-prev');
    gallery[3].classList.add('item-next');
    gallery[2].classList.add('item-selected');
    gallery[4].classList.add('item-hidden');
    gallery[0].classList.add('item-hidden');
    setInterval(() => {
      gallery.forEach(e => {
        e.classList.remove('item-selected');
      });
    }, 1000);
    console.log(gallery);
  }, []);

  return (
    <div className='gallery-wrapper'>
      <div className='gallery-images' ref={galleryParent}>

        <div className='gallery-data '>
          <img src={GALLERY_DATA[1].imgUrl} alt='' />
        </div>
        <div className='gallery-data '>
          <img src={GALLERY_DATA[4].imgUrl} alt='' />
        </div>
        <div className='gallery-data '>
          <img src={GALLERY_DATA[2].imgUrl} alt='' />
        </div>
        <div className='gallery-data'>
          <img src={GALLERY_DATA[3].imgUrl} alt='' />
        </div>
        <div className='gallery-data'>
          <img src={GALLERY_DATA[0].imgUrl} alt='' />
        </div>
        {/*<div className='gallery-controller controller-btn npd-icon-btn btn-prev'>
          <IconButton>
            <div className='slide-nav'>
              <svg>
                <use xlinkHref='#ios-prev' />
              </svg>
            </div>
          </IconButton>
        </div>
        <div className='gallery-controller controller-btn npd-icon-btn btn-next' style={{ transform: 'rotate(180deg)' }}>
          <IconButton>
            <div className='slide-nav'>
              <svg>
                <use xlinkHref='#ios-prev' />
              </svg>
            </div>
          </IconButton>
        </div>*/}
      </div>
      <div className='gallery-dots'>

      </div>
    </div>
  );
};
export default SlideGallery;

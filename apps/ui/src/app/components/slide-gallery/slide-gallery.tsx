import React, { useEffect } from 'react';
import './slide-gallery.scss';
import { IconButton } from '@material-ui/core';
import { GALLERY_DATA } from './data';

const SlideGallery = () => {
  const galleryParent = React.useRef(null);

  useEffect(() => {
    let index = 1;
    const gallery = document.querySelectorAll('.gallery-data');
    const resetClass = () => {
      gallery.forEach(e => {
        e.classList.remove('item-prev');
        e.classList.remove('item-selected');
        e.classList.remove('item-next');
        e.classList.remove('item-hidden');
      });
    };
    const nextImage = () => {
      index++;
      resetClass();
      gallery[(index - 1) % 5].classList.add('item-prev');
      gallery[(index) % 5].classList.add('item-selected');
      gallery[(index + 1) % 5].classList.add('item-next');
      gallery[(index + 2) % 5].classList.add('item-hidden');
      gallery[(index + 3) % 5].classList.add('item-hidden');
    };
    const prevImage = () => {
      index--;
      resetClass();
      gallery[Math.abs((index - 1)) % 5].classList.add('item-prev');
      gallery[Math.abs(index) % 5].classList.add('item-selected');
      gallery[Math.abs((index + 1) % 5)].classList.add('item-next');
      gallery[Math.abs((index + 2) % 5)].classList.add('item-hidden');
      gallery[Math.abs((index + 3) % 5)].classList.add('item-hidden');
    };
    setInterval(() => {
      prevImage();
    }, 2500);
    console.log(gallery);
  }, []);

  return (
    <div className='gallery-wrapper'>
      <div className='gallery-images' ref={galleryParent}>

        <div className='gallery-data item-prev'>
          <img src={GALLERY_DATA[1].imgUrl} alt='' />
        </div>
        <div className='gallery-data item-selected'>
          <img src={GALLERY_DATA[4].imgUrl} alt='' />
        </div>
        <div className='gallery-data item-next'>
          <img src={GALLERY_DATA[2].imgUrl} alt='' />
        </div>
        <div className='gallery-data item-hidden'>
          <img src={GALLERY_DATA[3].imgUrl} alt='' />
        </div>
        <div className='gallery-data item-hidden'>
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

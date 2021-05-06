import React, { useEffect } from 'react';
import './slide-gallery.scss';
import { IconButton } from '@material-ui/core';
import { GALLERY_DATA } from './data';

const TIME_SLIDE = 5000;
const SlideGallery = () => {
  const [galleryList, setGalleryList] = React.useState(null);

  useEffect(() => {
    const gallery = document.querySelectorAll('.gallery-data');

    setGalleryList(gallery);

  }, []);
  let index = 0;
  const resetClass = () => {
    if (galleryList) {
      galleryList.forEach(e => {
        e.classList.remove('item-prev');
        e.classList.remove('item-selected');
        e.classList.remove('item-next');
        e.classList.remove('item-hidden');
      });
    }
  };
  const nextImage = () => {
    index++;
    resetClass();
    if (galleryList) {
      galleryList[(index) % 5].classList.add('item-next');
      galleryList[(index + 1) % 5].classList.add('item-selected');
      galleryList[(index + 2) % 5].classList.add('item-prev');
      galleryList[(index + 3) % 5].classList.add('item-hidden');
      galleryList[(index + 4) % 5].classList.add('item-hidden');
    }
  };
  const prevImage = () => {
    index--;
    if (index < 0) {
      index = 4;
    }
    resetClass();
    if (galleryList) {
      galleryList[Math.abs(index + 1) % 5].classList.add('item-selected');
      galleryList[Math.abs(index + 2) % 5].classList.add('item-prev');
      galleryList[Math.abs(index + 3) % 5].classList.add('item-hidden');
      galleryList[Math.abs(index + 4) % 5].classList.add('item-hidden');
      galleryList[Math.abs(index + 5) % 5].classList.add('item-next');
    }
  };
  const autoRun = setInterval(() => {
    prevImage();

  }, TIME_SLIDE);


  return (
    <div className='gallery-wrapper'>
      <div className='gallery-images'>
        <div className='gallery-data item-next'>
          <img src={GALLERY_DATA[3].imgUrl} alt='' />
        </div>
        <div className='gallery-data item-selected'>
          <img src={GALLERY_DATA[1].imgUrl} alt='' />
        </div>
        <div className='gallery-data item-prev'>
          <img src={GALLERY_DATA[4].imgUrl} alt='' />
        </div>
        <div className='gallery-data item-hidden'>
          <img src={GALLERY_DATA[2].imgUrl} alt='' />
        </div>
        <div className='gallery-data item-hidden'>
          <img src={GALLERY_DATA[0].imgUrl} alt='' />
        </div>
        <div className='gallery-controller controller-btn npd-icon-btn btn-prev'>
          <IconButton onClick={prevImage}>
            <div className='slide-nav'>
              <svg>
                <use xlinkHref='#ios-prev' />
              </svg>
            </div>
          </IconButton>
        </div>
        <div className='gallery-controller controller-btn npd-icon-btn btn-next'>
          <IconButton onClick={nextImage}>
            <div className='slide-nav'>
              <svg>
                <use xlinkHref='#ios-prev' />
              </svg>
            </div>
          </IconButton>
        </div>
      </div>
      <div className='gallery-dots'>

      </div>
    </div>
  );
};
export default SlideGallery;

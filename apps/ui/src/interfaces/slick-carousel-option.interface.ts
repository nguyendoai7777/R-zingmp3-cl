type SlickCssEase = 'linear';
type SlickMode = 'center' | 'slider variable-width';

export interface ISlickCarouselOption {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
  speed: number;
  focusOnSelect: boolean;
  centerMode: boolean;
  centerPadding: string;
  lazyLoad: boolean;
  rtl: boolean;
  cssEase: SlickCssEase;
  className: SlickMode;
  responsive: {
    breakpoint: number,
    settings: ISlickCarouselOption
  }[]
}

export type SlickCarouselOption = Partial<ISlickCarouselOption>

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 170,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});

const swiperReviews = new Swiper('.mySwiperReviews', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 170,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});

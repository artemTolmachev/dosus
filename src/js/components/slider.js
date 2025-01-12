import Swiper  from 'swiper';
import { Navigation,  Pagination,  Scrollbar} from 'swiper/modules';

Swiper.use([Navigation, Scrollbar, Pagination]);


const swiper = new Swiper('.swiper__content', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  focusableElements: 'string',
  //  // Responsive breakpoints
  //  breakpoints: {
  //    // when window width is >= 320px
  //    320: {
  //      spaceBetween: 20
  //    },
  //    // when window width is >= 480px
  //    576: {
  //      spaceBetween: 30
  //    },
  //    // when window width is >= 640px
  //    640: {
  //      spaceBetween: 40
  //    }
  //  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

const swiper2 = new Swiper('.swiper-reviews', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.next-slide',
  },
     breakpoints: {
     // when window width is >= 320px
    //  768: {
    //    spaceBetween: 70
    //  }
   },
});

const swiper3 = new Swiper('.swiper__servieces', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  focusableElements: 'string'
});


import Swiper from 'swiper';


var swiper = new Swiper('.swiper-intro', {
  navigation: {
    nextEl: '.swiper-intro-next',
    prevEl: '.swiper-intro-prev',
  },
});


//catalog-rooms

var swiper = new Swiper('.swiper-rooms', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination-rooms',
    clickable: true,
  },
});
//room

var swiper = new Swiper('.swiper-rooms-card', {
  navigation: {
    nextEl: '.swiper-rooms-card-next',
    prevEl: '.swiper-rooms-card-prev',
  },
  pagination: {
    el: '.swiper-pagination-rooms-card',
    clickable: true,
  },
});

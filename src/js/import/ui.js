


//tabs

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

//menu mobile
$('.menu-open').on('click', function() {
  $('.menu').addClass('active');
  $('.pop-up-bg').fadeIn();
});

$('.menu-close, .pop-up-bg').on('click', function() {
  $('.menu').removeClass('active');
  $('.pop-up-bg').fadeOut();
});

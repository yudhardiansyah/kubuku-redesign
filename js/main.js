$(document).ready(function () {
  // Header Scroll Inverse
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('navbar-inverse');
    } else {
      $('.navbar').removeClass('navbar-inverse');
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });

  // Banner Carousel
  $('.hero-banner').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>'
  });

  $('.rank-type').slick({
    infinite: true,
    nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>'
  });

  $('.kbk-card-ctrl').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('rotated');
    $(this).parent().siblings().last().slideToggle();
  });
});

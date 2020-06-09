$(document).ready(function () {

   $(".menu").on("click", "a", function (event) {
      event.preventDefault();
      const id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1000)
   });

   $('.down-link').click(() => {
      $('html, body').animate({
          scrollTop: $('#about').offset().top
      }, 1000);
  });

   $('.specialities__slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: false,
      appendArrows: $('.slick-track'),
      fade: true

    });

    $('.gallery__slider').slick({
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 4,
      variableWidth: true
    });


   let tabsLink = $('.tabs__link');
   tabsLink.on('click', function (event) {
      event.preventDefault();
      let activeContent = $(this).attr('href');
      $('.visible').toggleClass('visible');
      $(activeContent).toggleClass('visible');
      
      $('.active').toggleClass('active');
      $(this).toggleClass('active');

      $(activeContent).fadeIn(500);
   });

   $('.header__burger').click(function(){
      $('.header__burger, .menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
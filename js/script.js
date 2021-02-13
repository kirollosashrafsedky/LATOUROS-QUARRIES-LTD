$(document).ready(function() {

    // setTimeout(function(){
    //     AOS.init({
    //       duration: 500,
    //       easing:"ease-in-out",
    //       once: false,
    //       offset: 100,
    //       disable: false
    //     });
    // },200);

    let menuState = "hidden";

    const toggleNav = function(){
        if(menuState == "hidden"){
            $("#full-overlay").addClass("show");
            $("#main-nav .navbar-toggler").addClass("togglerClose");
            $('body').addClass('show-menu');
            menuState = "shown";
        }
        else{
            $("#full-overlay").removeClass("show");
            $("#main-nav .navbar-toggler").removeClass("togglerClose");
            $('body').removeClass('show-menu');
            menuState = "hidden";
        }
    }

    const navbarTop = function(){
        if(window.pageYOffset < 50){
            $('#main-nav').addClass('navbar-top');
        }else{
            $('#main-nav').removeClass('navbar-top');

        }
    }

    navbarTop();


    $("#main-nav .navbar-toggler").on('click',function(){
        toggleNav();
    })


    $(window).on('scroll', function(){
        navbarTop();
    })
    
    $(window).on('resize', function(){
        if($(document).width() > 767){
            if(menuState == "shown"){
                toggleNav();
            }
        }
    })


    // $('.smooth-scroll').on('click',function(event){
    //       event.preventDefault();
    //       var hash = $(this).attr('href');
    //       if(menuState == "shown"){
    //         toggleNav();
    //     }
    //       $('html, body').animate({
    //         scrollTop: $(hash).offset().top-50
    //       },500)
        
    // })
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    
    const headerSwiper = new Swiper('.header-swiper .swiper-container', {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
          },
          autoHeight: true,
        pagination: {
            el: '.header-swiper .swiper-pagination',
            type: 'progressbar',
            progressbarOpposite: true
            },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            init: function(sw){
                $('.header-swiper .slide-no').text(zeroPad(sw.realIndex +  1, 2)+ '-' + zeroPad($('.header-swiper .swiper-slide:not(.swiper-slide-duplicate)').length , 2))
            },
            slideChange: function(sw){
                $('.header-swiper .slide-no').text(zeroPad(sw.realIndex +  1, 2)+ '-' + zeroPad($('.header-swiper .swiper-slide:not(.swiper-slide-duplicate)').length , 2))
            },
        }
        
    });

    const companySwiper = new Swiper('.company-swiper .swiper-container', {
        slidesPerView:1,
        spaceBetween: 20,
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.company-swiper .swiper-button-next',
            prevEl: '.company-swiper .swiper-button-prev',
          },
          breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            768: {
                slidesPerView:3,

              spaceBetween: 20
            },
          }
    });
    
    const facilitiesSwiper = new Swiper('.facilities-swiper .swiper-container', {
        slidesPerView:1,
        spaceBetween: 20,
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.facilities-swiper .swiper-button-next',
            prevEl: '.facilities-swiper .swiper-button-prev',
          },
    });

    const sustainabilitySwiper = new Swiper('.sustainability-swiper .swiper-container', {
        slidesPerView:1,
        spaceBetween: 20,
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.sustainability-swiper .swiper-button-next',
            prevEl: '.sustainability-swiper .swiper-button-prev',
          },
    });

    const sustainabilitySwiper2 = new Swiper('.sustainability-swiper-2 .swiper-container', {
        slidesPerView:1,
        spaceBetween: 20,
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.sustainability-swiper-2 .swiper-button-next',
            prevEl: '.sustainability-swiper-2 .swiper-button-prev',
          },
          breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            768: {
                slidesPerView:3,

              spaceBetween: 20
            },
          }
    });

    const mobileCompanySwiper = new Swiper('.mobile-company-swiper .swiper-container', {
        slidesPerView:1,
        spaceBetween: 10,
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.mobile-company-swiper .swiper-pagination',
            type: 'bullets',
          },
    });

    $('#contact-form').on('submit', function(e){
        e.preventDefault();
        $('#success-modal').modal('show');
    })
});
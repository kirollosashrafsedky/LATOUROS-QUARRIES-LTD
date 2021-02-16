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

    setTimeout(function(){
        $('.splash-screen').fadeOut("slow");
      },100)

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

    const zeroPad = (num, places) => String(num).padStart(places, '0');
    
    const headerSwiper = new Swiper('.header-swiper .swiper-container', {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
          },
        //   autoHeight: true,
        pagination: {
            el: '.header-swiper .swiper-pagination',
            type: 'progressbar',
            progressbarOpposite: true
            },
        loop: true,
        autoplay: {
            delay: 5000,
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
            clickable: true,
          },
    });
    let modalSwiperIndex = 0;
    $('[data-target="#images-modal"]').on('click', function(){
        $(this).parents('.images-parent').find('[data-target="#images-modal"]').each(function(){
            let url = $(this).css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "");
            // let url = $(this).css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "").replace('thumbnails','main');
            let slide = `<div class="swiper-slide">
                            <img src="${url}" class="img-fluid w-100">
                        </div>`;
            modalSwiper.appendSlide(slide);
        })
        modalSwiperIndex = $(this).parents('.images-parent').find('[data-target="#images-modal"]').index($(this));
        $('#images-modal').modal('show')
    })

    $('#images-modal').on('shown.bs.modal', function(){
        modalSwiper.update();
        modalSwiper.slideToLoop(modalSwiperIndex)
    })

    $('#images-modal').on('hidden.bs.modal', function(){
        $('#images-modal .swiper-wrapper').text('');
        modalSwiper.update();
    })

    const modalSwiper = new Swiper('#images-modal .swiper-container', {
        slidesPerView:1,
        spaceBetween: 10,
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '#images-modal .swiper-button-next',
            prevEl: '#images-modal .swiper-button-prev',
        },
        observer: true,
    });

    $('#video-modal').on('show.bs.modal', function(){
        $(this).find('iframe').attr('src',$(this).find('iframe').attr('data-src'))
    })

    $('#video-modal').on('hide.bs.modal', function(){
        $(this).find('iframe').attr('src','')
    })

    // contact form
    $('#contact-form').on('submit', function(e){
        e.preventDefault();
        if(formValidate($('#contact-form'))){
            // here goes the ajax code to submit the form to the required page
            // and on success, goes this line $('#success-modal').modal('show'); which shows the success modal
            $('#success-modal').modal('show');
        }

    })

    
    const errorMessagesEn = {
        'required':'Make sure you fill all inputs',
    }
    const errorMessagesGr = {
        'required':'Make sure you fill all inputs (in GR)',
    }

    let errorMessages = {}

    if(document.documentElement.lang == 'gr'){
        errorMessages = errorMessagesGr;
    }else{
        errorMessages = errorMessagesEn;
    }

    function formValidate(frm){
        let errors = [];
        $('.alert').alert('dispose');
        $('#contact-alert-container').fadeOut()
        $('input, textarea').removeClass('is-invalid')
    
        frm.find('[data-validate]').each(function(){
          let rules = $(this).data('validate').split('-');
          // rules
          if(rules.includes("required")){
            if($(this).val() == ''){
              $(this).addClass('is-invalid')
              if(!errors.includes(errorMessages.required)){
                errors.push(errorMessages.required);
              }
            }
          }
        })
          if(errors.length == 0){
            return true;
          }else{
            let alertHtml = `
            <div
              class="alert alert-danger alert-dismissible show fade mb-4"
              role="alert"
              id="error-alert">
              <ul class="mb-0 px-2">`;
              for(error in errors){
                alertHtml += `<li>${errors[error]}</li>`;
              }
              alertHtml += `
              </ul>
              <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
              >
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>`;
        
            $('#contact-alert-container').html(alertHtml)
            $('#contact-alert-container').fadeIn()
            return false
          }
      }
});
window.onload = function() {
 
    /* Video Main */

    let video = $('video');

    $('.first__play').click(function() {
        $('.wrapper').addClass('wrapper-active')
        $('.modal__video').addClass('modal__video-active')
    })

    $('.first__pause').click(function() {
        video.trigger('pause');
        $(this).fadeOut(200)
        $(this).removeClass('first__pause-active')
        $('.first__btn-container').fadeIn(200)
    })

    /* End Video Main */

    /* Wait Carousel */
    
    let waitCarousel = $('.wait__carousel')

    waitCarousel.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        dotsEach: true,
        navText: ["<img src='images/icons/arrow_right.svg'>","<img src='images/icons/arrow_right.svg'>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:5
            }
        }
    })

    let waitCarouselItem = waitCarousel.find('.owl-item')

    function getWaitCarouselItems() {
        if(window.innerWidth > 992) {
            $('.wait__carousel-active').parents('.owl-item').addClass('z-2')
            $('.wait__carousel-preactive').parents('.owl-item').addClass('z-1')
        
            waitCarousel.on('changed.owl.carousel',function(property){
                let current = property.item.index;
                let active = current+2
                let preactive = current+1
                waitCarouselItem.removeClass('z-2')
                waitCarouselItem.removeClass('z-1')
                $('.owl-item .wait__carousel-slide').removeClass('wait__carousel-active');
                $('.owl-item .wait__carousel-slide').removeClass('wait__carousel-preactive');
                $(property.target).find(".owl-item").eq(active).addClass('z-2');
                $(property.target).find(".owl-item").eq(active).find('.wait__carousel-slide').addClass('wait__carousel-active');
                $(property.target).find(".owl-item").eq(preactive).find('.wait__carousel-slide').addClass('wait__carousel-preactive');
                $(property.target).find(".owl-item").eq(preactive+2).find('.wait__carousel-slide').addClass('wait__carousel-preactive');
                $(property.target).find(".owl-item").eq(preactive+2).addClass('z-1')
            });
        } else {
            $('.wait__carousel-min-active').parents('.owl-item').addClass('z-1')

            waitCarousel.on('changed.owl.carousel',function(property){
                let current = property.item.index;
                let active = current+1
                waitCarouselItem.removeClass('z-2')
                waitCarouselItem.removeClass('z-1')
                $('.owl-item .wait__carousel-slide').removeClass('wait__carousel-active');
                $('.owl-item .wait__carousel-slide').removeClass('wait__carousel-preactive');
                $('.owl-item .wait__carousel-slide').removeClass('wait__carousel-min-active');
                $(property.target).find(".owl-item").eq(active).find('.wait__carousel-slide').addClass('wait__carousel-min-active');
                $(property.target).find(".owl-item").eq(active).addClass('z-1')
            });
        }
    }

    getWaitCarouselItems()

    $( window ).resize(function() {
        getWaitCarouselItems()
    })

    /* End Wait Carousel */

    /* Tours Carousel */

    let toursCarousel = $('.tours__carousel')

    toursCarousel.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        dotsEach: true,
        navText: ["<img src='images/icons/arrow_blue.svg'>","<img src='images/icons/arrow_blue.svg'>"],
        //autoplay: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    })

    /* End Tours Carousel */

    /* Team Hover */
    
    $('.team__item').hover(
        function() {
        $('.team__text').html($(this).attr('data-info'))
        }, function() {
        $('.team__text').html('')
    })

    /* End Team Hover */

    /* Review Carousel */

    let reviewsCarousel = $('.reviews__carousel')

    reviewsCarousel.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        dotsEach: true,
        navText: ["<img src='images/icons/arrow_right.svg'>","<img src='images/icons/arrow_right.svg'>"],
        //autoplay: true,
        responsive:{
            0: {
                items: 1
            },
            560:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })

    /* End Review Carousel */

    /* Accordeon */

    $('.answers__accordeon-open').click(function() {
        console.log(1)
        $(this).parents('.answers__accordeon').find('.answers__accordeon-text').toggleClass('answers__accordeon-text-show')
        $(this).toggleClass('answers__accordeon-open-show')
    })

    /* End Accordeon */

    /* Modal Carousel */

    let modalCarousel = $('.modal-carousel')

    modalCarousel.owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
        }
    })

    /* End Modal Carousel */

    /* Modals */

    $('.modal-close').click(function() {
        $('.wrapper').removeClass('wrapper-active')
    })
    $('.modal__form-close').click(function() {
        $('.wrapper').removeClass('wrapper-active')
    })
    $('.modal__video-close').click(function() {
        $('.wrapper').removeClass('wrapper-active')
    })

    $('.ocean__btn').click(function() {
        $('.wrapper').addClass('wrapper-active')
        $('.modal__form').addClass('modal__form-active')
    })

    $('.modal__form-btn').click(function() {
        let n = 0
        if(!$('.modal__form-input-name').val()) {
            $('.modal__form-comment-name').addClass('modal__form-comment-name-active')
        } else {
            $('.modal__form-comment-name').removeClass('modal__form-comment-name-active')
            n++
        }
        if (!$('.modal__form-input-phone').val()){
            $('.modal__form-comment-phone').addClass('modal__form-comment-phone-active')
        } else {
            $('.modal__form-comment-phone').removeClass('modal__form-comment-phone-active')
            n++
        }
        if (!$('.modal__form-input-email').val()){
            $('.modal__form-comment-email').addClass('modal__form-comment-email-active')
        } else {
            $('.modal__form-comment-email').removeClass('modal__form-comment-email-active')
            n++
        }
        if($('.modal__form-select-choose').html() == 'Выберите тур') {
            $('.modal__form-comment-select').addClass('modal__form-comment-select-active')
        } else {
            $('.modal__form-comment-select').removeClass('modal__form-comment-select-active')
            n++
        }
        if(n == 4) {
            $('.modal__form').removeClass('modal__form-active')
            $('.modal__send').addClass('modal__send-active')
        }
    })

    let modalSelect = $('.modal__form-select')

    $('body').click(function() {
        modalSelect.removeClass('modal__form-select-active')
        $('.islands__location').removeClass('islands__location-active')
    })

    modalSelect.click(function(event) {
        event.stopPropagation()        
        let flag = $(this).hasClass('modal__form-select-active') ? true : false
        modalSelect.removeClass('modal__form-select-active')
        flag ? $(this).removeClass('modal__form-select-active') : $(this).addClass('modal__form-select-active')
    })

    $('.modal__form-option').click(function() {
        let inner = $(this).html()
        if(inner.length > 25) {
            $(this).parents('.modal__form-select').find('.modal__form-select-choose').html($(this).html().slice(0,25) + '...')
        } else {
            $(this).parents('.modal__form-select').find('.modal__form-select-choose').html($(this).html())
        }        
        $(this).parents('.modal__form-select').find('.modal__form-select-choose').addClass('modal__form-select-choose-active')
    })

    /* End Modals */

    /* Fancybox */

    $().fancybox({
        selector : '.wait__carousel .owl-item:not(.cloned) a',
        hash   : false,
        loop: true,
        buttons : [
          'close'
        ]
    });
      
    $().fancybox({
        selector : '.reviews__carousel .owl-item:not(.cloned) a',
        hash   : false,
        loop: true,
        buttons : [
          'close'
        ]
    });

    /* End Fancybox */

    /* Header Burger */

    $('.header__burger').click(function() {
        $(this).toggleClass('header__burger-active')
        $('.header__mobile').toggleClass('header__mobile-active')
        $('.header').toggleClass('header-active')
    })

    /* End Header Burger */

    /* Visitors Carousel */

    let visitorsCarousel = $('.visitors__carousel')

    visitorsCarousel.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        dotsEach: true,
        navText: ["<img src='images/icons/arrow_right.svg'>","<img src='images/icons/arrow_right.svg'>"],
        //autoplay: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            993:{
                items:3
            },
            1201:{
                items:4
            }
        }
    })

    /* End Tours Carousel */

    /* Islands */

    $('.islands__location').click(function(event) {
        event.stopPropagation()
        $('.islands__location').removeClass('islands__location-active')
        $(this).toggleClass('islands__location-active')
    })

    $('.islands__info').click(function(event) {
        event.stopPropagation()
    })

    let hotelsCarousel = $('.hotels__carousel')

    hotelsCarousel.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        dotsEach: true,
        navText: ["<img src='images/icons/arrow_right.svg'>","<img src='images/icons/arrow_right.svg'>"],
        //autoplay: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    })

    /* End Islands */

    /* Hotel */

    
    let reviewCarousel = $('.review__carousel')

    reviewCarousel.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        dotsEach: true,
        //autoplay: true,
        responsive:{
            0:{
                items:1
            }
        }
    })
    
    let reviewCarouselMobile = $('.review__carousel-mobile')

    reviewCarouselMobile.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<img src='images/icons/arrow_right.svg'>","<img src='images/icons/arrow_right.svg'>"],
        dots: true,
        dotsEach: true,
        //autoplay: true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            }
        }
    })

    /* End Hotel */

    /* Island Video */

    $('.island__video-play').click(function(){
        $(this).parents('.island__video').find('video').addClass('active')
        $(this).parents('.island__video').find('.island__video-img').addClass('none')
    })

    /* End Island Video */

    /* Island Carousel */

    let islandPhotosCarousel = $('.island__photos-carousel')

    islandPhotosCarousel.owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        dotsEach: true,
        //autoplay: true,
        responsive:{
            0:{
                items:1
            }
        }
    })


    let islandMobileCarousel = $('.island__photos-mobile')

    islandMobileCarousel.owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        dotsEach: true,
        //autoplay: true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            769:{
                items:3
            }
        }
    })

    /* End Island Carousel */
    

}
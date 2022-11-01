
$(document).ready(function(){
    $(".hamburger").click(function (){
        $(this).toggleClass("is-active")
    })
    $('.popup-show').click(function(){
        $('body,html').addClass('over')
        $('.popup,.wh-widget-left').toggleClass('dn');
        $('.popup-window').toggleClass('active-window')

    })
    $('.close-popup,.overlay').click(function(){
        $('.popup,.wh-widget-left').toggleClass('dn');
        $('.popup-window').toggleClass('active-window')
        $('body,html').removeClass('over')

    })


    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

        }
    });
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1.27,
        spaceBetween: 0,
        pagination: {el: ".swiper-pagination", clickable: true,},
        pagination: {el: ".swiper-pagination",},
        loop: true,
        autoplay: {delay: 1,},
        freeMode: true,
        speed: 10000,
    });
})


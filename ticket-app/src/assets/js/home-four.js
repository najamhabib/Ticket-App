$(function ($) {


    $(".nav-trigger").on('click', function (e) {
        $("body").toggleClass('off-canvas-body');
        $(".menu-bar").toggleClass("off-canvas");
        e.preventDefault();
    });


    $('.search-form-wrap .search-icon').click(function () {
        $('.search-form-wrap .search-form').fadeIn('300');
        $('.search-form-wrap .search-form .search').focus().css("color", "#000");
    });
    $('.search-form-wrap .search-close').click(function () {
        $('.search-form-wrap .search-form').fadeOut('300');
    });


    $slide = $('.home-paralax');
    winH = $(window).height();
    $slide.height(winH);
    var skrollr_init = skrollr.init({
        mobileCheck: function () {
            return false;
        }
    });

    $('#butter li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('#butter li a').removeClass('active');
        $(this).addClass('active');
        var header_height = $('.header-wrap').outerHeight(true);
        
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
        
         if ($(window).width() > 767) {
             $('html,body').animate({scrollTop: $(this.hash).offset().top - header_height}, 1000);
         }
    });

    // Video Popup
     $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    //SUBSCRIBE
    $(".subscribe-me").subscribeBetter({
        trigger: "onidle", // You can choose which kind of trigger you want for the subscription modal to appear. Available triggers are "atendpage" which will display when the user scrolls to the bottom of the page, "onload" which will display once the page is loaded, and "onidle" which will display after you've scrolled.
        animation: "flyInDown", // You can set the entrance animation here. Available options are "fade", "flyInRight", "flyInLeft", "flyInUp", and "flyInDown". The default value is "fade".
        delay: 0, // You can set the delay between the trigger and the appearance of the modal window. This works on all triggers. The value should be in milliseconds. The default value is 0.
        showOnce: true, // Toggle this to false if you hate your users. :)
        autoClose: false, // Toggle this to true to automatically close the modal window when the user continue to scroll to make it less intrusive. The default value is false.
        scrollableModal: false      //  If the modal window is long and you need the ability for the form to be scrollable, toggle this to true. The default value is false.
    });

});
$(window).on('load',function () {

    setTimeout(function () {
        $("#loading").fadeOut(300);
    }, 3100);
});
$(window).on('scroll',function () {
    /*--------- Sticky Header ---------*/
    if ($(window).width() > 767) {
        if ($(this).scrollTop() > 5) {
            $('.header-two').addClass('is-sticky');
        }
        else {
            $('.header-two').removeClass('is-sticky');
        }
    }

});
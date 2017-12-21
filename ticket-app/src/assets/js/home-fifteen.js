"use strict";

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

    //OWL CAROUSEL
    $('.single-slider-1').owlCarousel({
        rtl: false,
        loop: true,
        nav: true,
        autoplay: false,
        dots: true,
        responsive: {
            0: {items: 1}
        },
        navText: [
            "<i class='arrow_carrot-left'></i>",
            "<i class='arrow_carrot-right'></i>"
        ]
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    });

    // Brand Slider One
    $('.brand-slider').owlCarousel({
        rtl: false,
        loop: true,
        nav: false,
        autoplay: false,
        dots: false,
        responsive: {
            992: {items: 5},
            767: {items: 4},
            480: {items: 3},
            380: {items: 2},
            0: {items: 1}
        }
    });


//Countdown
    if ($().countdown) {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 25);
        $('#dealCountdown1').countdown({until: austDay});
        $('#dealCountdown2').countdown({until: austDay});
        $('#dealCountdown3').countdown({until: austDay});
    }


    /*------------------- Product Layout Sliders  -------------------*/
    $(document).on('shown.bs.modal', function () {
        $(this).find('.sync1, .sync2').each(function () {
            $(this).data('owlCarousel') ? $(this).data('owlCarousel').onResize() : null;
        });
    });

    var sync1 = $(".sync1");
    var sync2 = $(".sync2");

    var navSpeedThumbs = 500;

    sync2.owlCarousel({
        rtl: false,
        items: 4,
        nav: true,
        margin: 20,
        navSpeed: navSpeedThumbs,
        responsive: {
            992: {items: 4},
            767: {items: 5},
            600: {items: 4}
        },
        responsiveRefreshRate: 200,
        navText: [
            "<i class='arrow_carrot-left'></i>",
            "<i class='arrow_carrot-right'></i>"
        ]
    });

    sync1.owlCarousel({
        rtl: false,
        items: 1,
        navSpeed: 1000,
        nav: false,
        onChanged: syncPosition,
        responsiveRefreshRate: 200

    });


    function syncPosition(el) {
        var current = this._current;
        $(".sync2")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced");
        center(current);
    }

    $(".sync2").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.trigger("to.owl.carousel", [number, 1000]);
    });

    function center(num) {

        var sync2visible = sync2.find('.owl-item.active').map(function () {
            return $(this).index();
        });

        if ($.inArray(num, sync2visible) === -1) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("to.owl.carousel", [num - sync2visible.length + 2, navSpeedThumbs, true]);
            } else {
                sync2.trigger("to.owl.carousel", Math.max(0, num - 1));
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("to.owl.carousel", [sync2visible[1], navSpeedThumbs, true]);
        } else if (num === sync2visible[0]) {
            sync2.trigger("to.owl.carousel", [Math.max(0, num - 1), navSpeedThumbs, true]);
        }
    }


    //SUBSCRIBE
    $(".subscribe-me").subscribeBetter({
        trigger: "onidle", // You can choose which kind of trigger you want for the subscription modal to appear. Available triggers are "atendpage" which will display when the user scrolls to the bottom of the page, "onload" which will display once the page is loaded, and "onidle" which will display after you've scrolled.
        animation: "flyInDown", // You can set the entrance animation here. Available options are "fade", "flyInRight", "flyInLeft", "flyInUp", and "flyInDown". The default value is "fade".
        delay: 0, // You can set the delay between the trigger and the appearance of the modal window. This works on all triggers. The value should be in milliseconds. The default value is 0.
        showOnce: true, // Toggle this to false if you hate your users. :)
        autoClose: false, // Toggle this to true to automatically close the modal window when the user continue to scroll to make it less intrusive. The default value is false.
        scrollableModal: false      //  If the modal window is long and you need the ability for the form to be scrollable, toggle this to true. The default value is false.
    });

    /*------------------- Scroll To Top Animate -------------------*/
    $('#to-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });


});
$(window).on('load',function () {

    setTimeout(function () {
        $("#loading").fadeOut(300);
    }, 3100);
});
$(window).on('scroll',function () {
    /*--------- Sticky Header ---------*/
    if ($(window).width() > 1200) {
        if ($(this).scrollTop() > 5) {
            $('.header-two .header-wrap').addClass('is-sticky');
        }
        else {
            $('.header-two .header-wrap').removeClass('is-sticky');
        }
    }

    /*------------------- Scroll To Top Animate -------------------*/
    if ($(this).scrollTop() > 100) {
        $('#to-top').css({bottom: '55px'});
    }
    else {
        $('#to-top').css({bottom: '-150px'});
    }
});
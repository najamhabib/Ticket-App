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


    /*------------------- Image Popup  -------------------*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by jTheme Studio</small>';
            }
        }
    });
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /*------------------- Product Layout Sliders  -------------------*/
    $(document).on('shown.bs.modal', function () {
        $(this).find('.sync1, .sync2').each(function () {
            $(this).data('owlCarousel') ? $(this).data('owlCarousel').onResize() : null;
        });
    });

    var sync1 = $(".sync1");
    var sync2 = $(".sync2");
    var sync3 = $(".layout-5 .sync1");
    var sync4 = $(".layout-5 .sync2");
    var navSpeedThumbs = 500;

    sync4.owlCarousel({
        rtl: false,
        items: 4,
        nav: false,
        navSpeed: navSpeedThumbs,
        responsive: {
            992: {items: 4},
            767: {items: 5},
            600: {items: 4}
        },
        responsiveRefreshRate: 200
    });

    sync3.owlCarousel({
        rtl: false,
        items: 1,
        navSpeed: 1000,
        nav: true,
        onChanged: syncPosition,
        responsiveRefreshRate: 200,
        navText: [
            "<span class='nav-prev'>Prev</span>",
            "<span class='nav-next'>Next</span>"
        ]
    });


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

    /*------------------- Related Product Slider  -------------------*/
    if ($('.related-prod-slider').length > 0) {
        $('.related-prod-slider').owlCarousel({
            dots: false,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            nav: true,
            navText: [
                "<i class='arrow_carrot-left'></i>",
                "<i class='arrow_carrot-right'></i>"
            ],
            margin: 30,
            responsive: {
                1200: {items: 4},
                990: {items: 3},
                600: {items: 2},
                480: {items: 1},
                0: {items: 1}
            }
        });
    }
    if ($('.related-prod-slider-2').length > 0) {
        $(".related-prod-slider-2").owlCarousel({
            dots: false,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: true,
            navText: [
                "<i class='arrow_carrot-left'></i>",
                "<i class='arrow_carrot-right'></i>"
            ],
            responsive: {
                0: {items: 1},
                1200: {items: 3},
                990: {items: 2},
                600: {items: 2},
                480: {items: 1}
            }
        });
    }

    /*------------------- Recent Product Slider  -------------------*/
    if ($('.recent-prod-slider').length > 0) {
        $(".recent-prod-slider").owlCarousel({
            dots: false,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: true,
            responsive: {
                0: {items: 1},
                1200: {items: 1},
                767: {items: 1},
                600: {items: 2},
                480: {items: 1}
            },
            navText: [
                "<i class='arrow_carrot-left'></i>",
                "<i class='arrow_carrot-right'></i>"
            ]
        });
    }

    /*------------------- Blog Slider  -------------------*/
    if ($('.blog-slider').length > 0) {
        $(".blog-slider").owlCarousel({
            dots: false,
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            autoplayHoverPause: true,
            smartSpeed: 100,
            navText: [
                "<i class='arrow_carrot-left'></i>",
                "<i class='arrow_carrot-right'></i>"
            ]
        });
    }
    if ($('.related-post-slider').length > 0) {
        $(".related-post-slider").owlCarousel({
            dots: false,
            loop: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 100,
            responsive: {
                0: {items: 1},
                1200: {items: 2},
                990: {items: 1},
                600: {items: 1}
            }
        });
    }

    /*------------------- Scroll To Top Animate -------------------*/
    $('#to-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /*------------------- Video Play on click -------------------*/
    $('.play-video').on('click', function (ev) {

        $(".video")[0].src += "&autoplay=1";
        $('.play-video').hide();
        ev.preventDefault();

    });

    /*------------------- Price Range -------------------*/
    var priceSliderRange = $('#slider-range');
    if ($.ui) {
        if ($(priceSliderRange).length) {
            $(priceSliderRange).slider({
                range: true,
                min: 0,
                max: 500,
                values: [16, 200],
                slide: function (event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            $("#amount").val(
                    "$" + $("#slider-range").slider("values", 0) +
                    " - $" + $("#slider-range").slider("values", 1)
                    );
        }
    }

    /*--------- Isotop Items ---------*/
    var $grid = $('.isotope-wrap').isotope({
        itemSelector: '.isotope-item',
        percentPosition: true
    });
    $('.portfolio .theme-tabs').on('click', 'li > a', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
        $('.theme-tabs li').removeClass('current');
        $(this).parent().addClass('current');
    });

    /*------------------- Contact Map -------------------*/

    if (typeof google === 'object' && typeof google.maps === 'object') {
        if ($('#map-canvas2').length) {

            var map;
            var marker;
            var infowindow;
            var mapIWcontent = '' +
                    '' +
                    '<div class="map-info-window">' +
                    '<div class="map-location">' +
                    '<div class="loctn-img">' +
                    '<a class="media-link" href="#">' +
                    '<img class="img-responsive" src="assets/img/main/banner/map-location.jpg" alt=""/>' +
                    '</a>' +
                    '</div>' +
                    '<div class="loctn-info">' +
                    '<h4 class="title-2"> Location </h4>' +
                    '<p> 79 Orchard St,New York <br>NY 10002, USA </p>' +
                    '<p> (0096) 8645 234 438 </p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '';
            var contentString = '' +
                    '' +
                    '<div class="iw-container">' +
                    '<div class="iw-content">' +
                    '' + mapIWcontent +
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                    '</div>' +
                    '' +
                    '';
            var image = 'assets/img/common/map-icon.png'; // marker icon
            google.maps.event.addDomListener(window, 'load', function () {
                var mapOptions = {
                    scrollwheel: false,
                    zoom: 10,
                    styles: [{"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]},
                        {"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]},
                        {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}, {"lightness": 17}]},
                        {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"color": "#ffffff"}, {"lightness": 29},
                                {"weight": 0.2}]}, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#ffffff"}, {"lightness": 18}]},
                        {"featureType": "road.local", "elementType": "geometry", "stylers": [{"color": "#ffffff"}, {"lightness": 16}]},
                        {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]},
                        {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#dedede"}, {"lightness": 21}]},
                        {"elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]},
                        {"elementType": "labels.text.fill", "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]},
                        {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]},
                        {"featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]},
                        {"featureType": "administrative", "elementType": "geometry.fill", "stylers": [{"color": "#fefefe"}, {"lightness": 20}]},
                        {"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]}],
                    center: new google.maps.LatLng(40.6700, -73.9400) // map coordinates
                };

                map = new google.maps.Map(document.getElementById('map-canvas2'),
                        mapOptions);
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400), // marker coordinates
                    map: map,
                    icon: image,
                    title: 'Hello World!'
                });
            });
        }
    }




    $('.main-player').each(function () {

        function arrayShuffle(o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
                ;
            return o;
        }

        var $this = $(this);
        var $list = $this.find('.main-player-list');
        var $content = $this.find('.main-player-song');
        var $loop = $this.find('.main-player-loop');
        var $shuffle = $this.find('.main-player-shuffle');
        var el = $this.find('audio').get(0);

        var init_volume = Math.min(1, Math.max(0, parseFloat($this.data('audioVolume'))));
        var is_shuffle = $this.data('audioShuffle') ? true : false;
        var is_loop = $this.data('audioLoop') ? true : false;
        var index = 0;
        var songs = [];
        var keys = [];
        $list.find('li').each(function () {
            var $li = $(this);
            var song = $li.data();
            if (!song.audio)
                return;
            song.element = $li;
            var key = songs.push(song) - 1;
            keys.push(key);
            $li.data('audioIndex', key);
        });

        var shuffle = arrayShuffle(keys);

        function load(shift, autoplay, player) {

            index += shift;

            if (index >= songs.length) {
                shuffle = arrayShuffle(keys);
                index = 0;
                if (!is_loop)
                    autoplay = false;
            } else if (index < 0) {
                index = songs.length - 1;
            }

            var i = index;

            if (is_shuffle) {
                i = shuffle[i];
            }

            player.load(songs[i].audio);
            if (autoplay) {
                player.play();
            } else {
                player.pause();
            }

            $list.find('.playing').removeClass('playing');

            songs[i].element.addClass('playing');

            $content.html(songs[i].element.html());
        }

        var player = audiojs.create(el, {
            autoplay: $this.data('audioAutoload') ? true : false,
            loop: false,
            preload: true,
            css: false,
            createPlayer: {
                markup: false,
                playPauseClass: 'main-player-play-pause',
                scrubberClass: 'main-player-scrubber',
                progressClass: 'main-player-progress',
                loaderClass: 'main-player-loaded',
                timeClass: 'main-player-time',
                durationClass: 'main-player-duration',
                playedClass: 'main-player-played',
                errorMessageClass: 'main-player-error-message',
                playingClass: 'main-player-playing',
                loadingClass: 'main-player-loading',
                errorClass: 'main-player-error'
            },
            trackEnded: function () {
                load(1, true, this);
            }
        });

        if (init_volume)
            player.setVolume(init_volume);

        $this.data('audiojs', player);

        var volume = {
            wrapper: $this.find('.main-player-volume'),
            element: $this.find('.main-player-volume .main-player-vslider > div'),
            pos: $this.find('.main-player-volume .main-player-vslider b'),
            volume: player.element.volume,
            init: function () {
                volume.element.on('click', volume.change);
                volume.element.on('mousedown', volume.drag);

                $this.on('click', '.main-player-volume-high, .main-player-volume-low', function () {
                    player.setVolume(0);
                    volume.update();
                });

                $this.on('click', '.main-player-volume-off', function () {
                    player.setVolume(volume.volume);
                    volume.update();
                });

                volume.update();
            },
            change: function (e) {
                e.preventDefault();
                var pos = volume.getFrac(e, $(this));
                volume.update(pos * 100);
                player.setVolume(pos);
                volume.volume = pos;
            },
            update: function (percent) {
                var v = typeof percent != 'undefined' ? percent : player.element.volume * 100;
                volume.wrapper.toggleClass('off', v == 0);
                volume.wrapper.toggleClass('half', v > 0 && v <= 50);
                volume.pos.height(v + '%');
            },
            drag: function (e) {
                e.preventDefault();
                $(document).on('mousemove', volume.moveHandler);
                $(document).on('mouseup', volume.stopHandler);
                volume.wrapper.addClass('hover');
            },
            moveHandler: function (e) {
                var pos = volume.getFrac(e, volume.element);
                volume.update(pos * 100);
                player.setVolume(pos);
                volume.volume = pos;
            },
            stopHandler: function () {
                $(document).off('mousemove', volume.moveHandler);
                $(document).off('mouseup', volume.stopHandler);
                volume.wrapper.removeClass('hover');
            },
            getFrac: function (e, $this) {
                return 1 - Math.min(1, Math.max(0, (e.pageY - $this.offset().top) / $this.height()));
            }

        };

        volume.init();

        $this.on('click', '.main-player-list-button', function () {
            $list.toggleClass('opened');
        });

        $this.on('click', '.main-player-next', function () {
            load(1, true, player);
        });

        $this.on('click', '.main-player-prev', function () {
            load(-1, true, player);
        });

        $list.on('click', 'li', function () {
            var i = $(this).data('audioIndex');
            if (i !== null && i >= 0) {
                index = i;
                load(0, true, player);
            }
            $list.removeClass('opened');
        });

        $shuffle.toggleClass('off', !is_shuffle);
        $loop.toggleClass('off', !is_loop);

        $shuffle.click(function () {
            $shuffle.toggleClass('off');
            is_shuffle = !$shuffle.hasClass('off');
        });

        $loop.click(function () {
            $loop.toggleClass('off');
            is_loop = !$loop.hasClass('off');
        });

        load(0, player.settings.autoplay, player);
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
            $('.header-two').addClass('is-sticky');
        }
        else {
            $('.header-two').removeClass('is-sticky');
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
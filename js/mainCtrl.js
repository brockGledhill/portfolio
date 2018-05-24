angular.module('portfolio').controller('mainCtrl', function($scope, mainSrvc) {

    $('.mob-menu').click(function() {
        $('.mob-nav').slideToggle(500);
    });

    $('.main-container, .nav-opt').click(function() {
        $('.mob-nav').slideUp(500);
    });
    
    $('.front-skills, .back-skills').hide();

    $('.front').click(function() {
        $('.front-skills').slideToggle(1000);
        $('.back-skills').slideUp(1000);
        if($('.front-arrow').hasClass('rotate')) {
            $('.front-arrow').removeClass('rotate')
        } else {
            $('.front-arrow').addClass('rotate');
        }
        $('.back-arrow').removeClass('rotate');
    });

    $('.back').click(function() {
        $('.back-skills').slideToggle(1000);
        $('.front-skills').slideUp(1000);
        if($('.back-arrow').hasClass('rotate')) {
            $('.back-arrow').removeClass('rotate')
        } else {
            $('.back-arrow').addClass('rotate');
        }
        $('.front-arrow').removeClass('rotate');
    });

    // Scroll to Element with Logo and Title Animations \\
    $('a[href*="#"]:not([href="#"])').click(function() {

        // Logo and Title \\
        // $("#main-logo").fadeOut(500);
        // $(".name-container").animate({"margin-left": "-25px"}, 1000);
        // $(".title").animate({"margin-left": "-80px"}, 500);
        // $("header").addClass("header-overlay", function() {
        //   $(this).fadeIn(1000);
        // });
        // $("#header-logo").delay(250).fadeIn(500);

        $('.mobile-navbar').slideUp(500);

        // Scroll \\
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').delay(250).animate({
                    scrollTop: target.offset().top - 85
                }, 1500);
                return false;
            }
        }
    });
    
    // Active Nav Tabs \\
    $('.nav-opt').click(function() {
        $('.nav-opt').removeClass('active');
        $(this).addClass('active');
    });
    

    $(window).scroll(function(){
    // This function detects if an element is scrolled into view
        function elementScrolled(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }
         
        if (elementScrolled('#about')) {
            var els = $('.about-opt'),
                i = 0,
                f = function () {
                    $('.nav-opt').removeClass('active');
                    $(els[i++]).addClass('active');
                    if(i < els.length) setTimeout(f, 400);
                };
            f();
        } else if (elementScrolled('#skills')) {
            var els = $('.skills-opt'),
                i = 0,
                f = function () {
                    $('.nav-opt').removeClass('active');
                    $(els[i++]).addClass('active');
                    if(i < els.length) setTimeout(f, 400);
                };
            f();
        } else if (elementScrolled('#portfolio')) {
            var els = $('.portfolio-opt'),
                i = 0,
                f = function () {
                    $('.nav-opt').removeClass('active');
                    $(els[i++]).addClass('active');
                    if(i < els.length) setTimeout(f, 400);
                };
            f();
        } else if (elementScrolled('#contact')) {
            var els = $('.contact-opt'),
                i = 0,
                f = function () {
                    $('.nav-opt').removeClass('active');
                    $(els[i++]).addClass('active');
                    if(i < els.length) setTimeout(f, 400);
                };
            f();
        } else {
          $('.nav-opt').removeClass('active');
        }
    });

});

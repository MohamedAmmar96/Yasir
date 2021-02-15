$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


// Scroll To Top Button 
var scrollButton = $(".scroll-top");
$(window).scroll(function() {
    ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
});
// Click Button to scroll top 
scrollButton.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 600);
});

var wow = new WOW();
wow.init();



// parallaxInstance.friction(0.2, 0.2);
$(document).ready(function() {
    if ($(window).width() >= 992) {
        var scene = $('#scene').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    // Langding Page Links
    $(".toabout").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });
    $(".tofeatures").click(function() {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 500);
    });
    $(".tomanage").click(function() {
        $('html, body').animate({
            scrollTop: $("#manage").offset().top
        }, 500);
    });
    $(".totakamol").click(function() {
        $('html, body').animate({
            scrollTop: $("#takamol").offset().top
        }, 500);
    });
    $(".tocs").click(function() {
        $('html, body').animate({
            scrollTop: $("#cs").offset().top
        }, 500);
    });
    $(".tocontact-us").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact-us").offset().top
        }, 500);
    });


    $(".feature-item").hover(function() {
        $('.feature-item').removeClass("opacity-in");
        $(this).addClass("opacity-in");
    });



    $('.apps .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 10,
        // stagePadding: 5,
        rtl: true,
        navText: ["<span class='lnr lnr-arrow-right'></span>", "<span class='lnr lnr-arrow-left'></span>"],
        responsiveClass: true,
        dots: true,
        nav: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 2,
                margin: 20
            },
            500: {
                items: 4,
                margin: 20
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6,
            },
            1510: {
                items: 7,
            }
        }
    });
    $(".mo-tabs a").on("shown.bs.tab", function(e) {
        let $owl = $(".apps .owl-carousel");
        $owl.trigger('refresh.owl.carousel');
    });


    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 20,
        // stagePadding: 5,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        dots: true,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
            1510: {
                items: 6,
            }
        }
    });

    // //This is To make faetures as slider in small screens
    // if ($(window).width() <= 991) {
    //     $(".features .features-box").addClass("owl-carousel owl-theme");
    //     $(".features-box .feature").removeClass("owl-carousel");
    //     $('.features .owl-carousel').owlCarousel({
    //         loop: false,
    //         margin: 0,
    //         rtl: true,
    //         responsiveClass: true,
    //         nav: false,
    //         dots: true,
    //         responsive: {
    //             0: {
    //                 items: 1
    //             },
    //             600: {
    //                 items: 2

    //             }
    //         }
    //     })
    // } else {
    //     $(".features-box .feature").removeClass("owl-carousel");
    //     $(".features-box .feature").removeClass("owl-carousel");
    // };


    // This is To Open search Box
    $(".search").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box").slideDown(300);
    });
    $(".search").click(function() {
        $(".search .search-icon").removeClass("open-search")
        $(".search .search-icon").addClass("close-search")
        $(".close-search-btn").fadeIn(500)
        $(".search-box").fadeIn(500);
    });
    $(".close-search-btn,.overlay-box").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box").slideUp(500);
    });
    $(".close-search-btn,.overlay-box").click(function() {
        $(".search .search-icon").addClass("open-search")
        $(".search .search-icon").removeClass("close-search")
        $(".close-search-btn").fadeOut(300)
        $(".search-box").fadeOut(300);
    });


    //This is to Open Side Menu in Small Screens
    $(".menu").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").addClass("menu-open");
        $(".overlay-box2").fadeIn(500);
    });
    $(".close,.overlay-box2").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").removeClass("menu-open");
        $(".overlay-box2").fadeOut(500);
    });

    // if ($(window).width() <= 991) {
    //     $(".lang-name").click(function() {
    //         $(this).toggleClass("rotate")
    //         $(".mo-nav .lang-list").slideToggle(300);
    //     });
    // }
    $(".config-box .nav-link").click(function() {
        $(this).toggleClass("rotate")
        $(this).siblings(".config-list").slideToggle(300);
    });

    if ($(window).width() <= 991) {
        $(".sub-box .nav-link").click(function() {
            $(this).toggleClass("rotate")
            $(this).siblings(".sub-menu").slideToggle(300);
        });
    }
    if ($(window).width() <= 991) {
        $(".sub-sub-box .sub-link").click(function() {
            $(this).toggleClass("rotate")
            $(this).siblings(".sub-sub-menu").slideToggle(300);
        });
    }

});
$(window).resize(function(){
    // Function
    services_both_section_slider();
    number_dez_owl_slider();


});


$(document).ready(function(){

    // Function
    services_both_section_slider();
    number_dez_owl_slider();


    // WOW js
    new WOW().init();

    $('.sub_menu').click(function(){
        $(this).toggleClass('active');
        $('.dorpdown--submenu').slideToggle();
    });


    //Popup Js
     $('.contact_popup_box').click(function(){
        $('.contact_popup_block').addClass('open');
        $('html').addClass('sidebar_open');
    });
    $('.close_popup_action, .hamburger-menu').click(function(){
        $('.contact_popup_block').removeClass('open');
        $('html').removeClass('sidebar_open');
    });



    // Accordion Js
    $('.ct_accordion_lable').click(function () {
        if ($(window).width() <= 767) {
            $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');
            $(this).toggleClass('ct_visiable');
            /* $(this).parents('.hgf-col').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');*/

            $(this).siblings().find('.ct_accordion_info').slideUp();
            $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_info').slideUp();
            /*  $(this).parents('.hgf-col').siblings().find('.ct_accordion_info').slideUp();*/

            $(this).parents('.ct_accordion_wrap').find('.ct_accordion_info').slideToggle();
        }
    });

    // footer-fixed menu
    $(".footer-fixed-trigger").click(function(){
        $(".footer-fixed-trigger").toggleClass("active");
        $(".footer-fixed-icon").toggleClass("show");
    });

    // Text Animation Js
    $('.has-animation').each(function(index) {
        if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){
            $(this).delay($(this).data('delay')).queue(function(){
                $(this).addClass('animate-in');
            });
        }
    });

    $(window).scroll(function() {
        $('.has-animation').each(function(index) {
            if($(window).scrollTop() + $(window).height() > $(this).offset().top ){
                $(this).delay($(this).data('delay')).queue(function(){
                    $(this).addClass('animate-in');
                });
            }
        });
    });




    //Deine Leistungen Owl Slider
    $('.deine_leistungen_owl').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        navText: ["\n" +
        "<svg class='svg-color' xmlns=\"http://www.w3.org/2000/svg\" width=\"54.323\" height=\"36.231\" viewBox=\"0 0 54.323 36.231\">\n" +
        "  <path id=\"left_arrow\" data-name=\"left arrow\" d=\"M35.537,19.68a2.466,2.466,0,0,1-3.472.019L20.574,8.246V51.889a2.453,2.453,0,0,1-4.906,0V8.246L4.177,19.718A2.483,2.483,0,0,1,.705,19.7a2.443,2.443,0,0,1,.019-3.453L16.385.7h0a2.754,2.754,0,0,1,.774-.509A2.341,2.341,0,0,1,18.1,0a2.459,2.459,0,0,1,1.717.7L35.48,16.246A2.4,2.4,0,0,1,35.537,19.68Z\" transform=\"translate(0 36.231) rotate(-90)\" fill=\"#e4382c\"/>\n" +
        "</svg>\n","\n" +
        "<svg class='svg-color' xmlns=\"http://www.w3.org/2000/svg\" width=\"54.323\" height=\"36.231\" viewBox=\"0 0 54.323 36.231\">\n" +
        "  <path id=\"right_arrow\" data-name=\"right arrow\" d=\"M35.537,34.643a2.466,2.466,0,0,0-3.472-.019L20.574,46.078V2.434a2.453,2.453,0,0,0-4.906,0V46.078L4.177,34.605a2.483,2.483,0,0,0-3.472.019,2.443,2.443,0,0,0,.019,3.453L16.385,53.625h0a2.754,2.754,0,0,0,.774.509,2.341,2.341,0,0,0,.943.189,2.459,2.459,0,0,0,1.717-.7L35.48,38.077A2.4,2.4,0,0,0,35.537,34.643Z\" transform=\"translate(0 36.231) rotate(-90)\" fill=\"#e4382c\"/>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                dots:true
            },
            576:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });



    //Bewertungen Owl Slider
    $('.bewertungen_owl').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54.323\" height=\"36.231\" viewBox=\"0 0 54.323 36.231\">\n" +
        "  <path id=\"left-arrow-white\" d=\"M35.537,19.68a2.466,2.466,0,0,1-3.472.019L20.574,8.246V51.889a2.453,2.453,0,0,1-4.906,0V8.246L4.177,19.718A2.483,2.483,0,0,1,.705,19.7a2.443,2.443,0,0,1,.019-3.453L16.385.7h0a2.754,2.754,0,0,1,.774-.509A2.341,2.341,0,0,1,18.1,0a2.459,2.459,0,0,1,1.717.7L35.48,16.246A2.4,2.4,0,0,1,35.537,19.68Z\" transform=\"translate(0 36.231) rotate(-90)\" fill=\"#fff\"/>\n" +
        "</svg>\n","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54.323\" height=\"36.231\" viewBox=\"0 0 54.323 36.231\">\n" +
        "  <path id=\"right-arrow-white\" d=\"M35.537,34.643a2.466,2.466,0,0,0-3.472-.019L20.574,46.078V2.434a2.453,2.453,0,0,0-4.906,0V46.078L4.177,34.605a2.483,2.483,0,0,0-3.472.019,2.443,2.443,0,0,0,.019,3.453L16.385,53.625h0a2.754,2.754,0,0,0,.774.509,2.341,2.341,0,0,0,.943.189,2.459,2.459,0,0,0,1.717-.7L35.48,38.077A2.4,2.4,0,0,0,35.537,34.643Z\" transform=\"translate(0 36.231) rotate(-90)\" fill=\"#fff\"/>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                dots:true
            },
            768:{
                items:1
            },
        }
    });

    //Kurse im Uberblick Owl Slider
    $('.kurse_im_uberblick_owl').owlCarousel({
        loop:false,
        margin:70,
        nav:true,
        dots:false,
        navText: ["\n" +
        "<svg class='svg-color' xmlns=\"http://www.w3.org/2000/svg\" width=\"54.323\" height=\"36.231\" viewBox=\"0 0 54.323 36.231\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-round-down\" data-name=\"Icon ionic-ios-arrow-round-down\" d=\"M35.537,19.68a2.466,2.466,0,0,1-3.472.019L20.574,8.246V51.889a2.453,2.453,0,0,1-4.906,0V8.246L4.177,19.718A2.483,2.483,0,0,1,.705,19.7a2.443,2.443,0,0,1,.019-3.453L16.385.7h0a2.754,2.754,0,0,1,.774-.509A2.341,2.341,0,0,1,18.1,0a2.459,2.459,0,0,1,1.717.7L35.48,16.246A2.4,2.4,0,0,1,35.537,19.68Z\" transform=\"translate(0 36.231) rotate(-90)\" fill=\"#910000\"/>\n" +
        "</svg>\n","\n" +
        "<svg class='svg-color' xmlns=\"http://www.w3.org/2000/svg\" width=\"54.323\" height=\"36.231\" viewBox=\"0 0 54.323 36.231\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-round-down\" data-name=\"Icon ionic-ios-arrow-round-down\" d=\"M35.537,34.643a2.466,2.466,0,0,0-3.472-.019L20.574,46.078V2.434a2.453,2.453,0,0,0-4.906,0V46.078L4.177,34.605a2.483,2.483,0,0,0-3.472.019,2.443,2.443,0,0,0,.019,3.453L16.385,53.625h0a2.754,2.754,0,0,0,.774.509,2.341,2.341,0,0,0,.943.189,2.459,2.459,0,0,0,1.717-.7L35.48,38.077A2.4,2.4,0,0,0,35.537,34.643Z\" transform=\"translate(0 36.231) rotate(-90)\" fill=\"#910000\"/>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                dots:true
            },
            576:{
                items:2,
                margin:25,
            },
            992:{
                items:3,
                margin:25,
            },
            1200:{
                items:3
            }
        }
    });





    //read more js
    $('.moreless-button').click(function() {
        // unsere slider section more-contain slidetoggle
        $(this).parents('.main_more_text').find('.moretext').slideToggle();
        $(this).parents('.main_more_text').find('.slide_toggle_btn').fadeToggle('fast');

        setTimeout(function(){ $('.owl-carousel').trigger('refresh.owl.carousel'); }, 470);

        if ($(this).find('span').text() == "weniger") {
            $(this).find('span').text("mehr dazu")
            $(this).find('.fa-angle-down').removeClass('angle_rotact');

        } else {
            $(this).find('span').text("weniger");
            $(this).find('.fa-angle-down').addClass('angle_rotact');
        }

        $('.kurse_im_uberblick_content').toggleClass('open');
    });

    // krus table weekly inner list
    $('.kursplan_common_data_block ul li a').click(function(){
        $(this).addClass('active').parents('li').siblings().find('a').removeClass('active');
        var krus_day_main_list = $(this).attr('data-day');
        $(this).parents('.kursplan_common_data_block').find($('.'+ krus_day_main_list)).addClass('active').siblings().removeClass('active');
    });


    // Show Dropdown Js
    $(".dropdown").click(function(){
        $(this).find(".dropdown-menu").slideToggle("fast");
    });

    $(".dropdown-menu li a").click(function(){
        var drop_down_contain = $(this).text();

        var drop_down_data_value = $(this).attr('data-value');

        $(this).parents('.dropdown').find(".main_drop_title p").text(drop_down_contain);
        $(this).parents('.dropdown').find(".main_drop_title p").attr('data-value', drop_down_data_value);

        check_training();
    });

    function check_training(){

        var traning_value = $(".drop_down_first .main_drop_title p").attr('data-value');
        var merge_class = traning_value;

        $(".cm-tab-content").find("#" + merge_class).addClass('active').siblings().removeClass('active');

    }




});

// beauty_three_sliderslider
function services_both_section_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".services_both_section_slider");

    if (checkWidth >= 576) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 575) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop:false,
            margin:0,
            dots: true,
            nav: true,
            autoHeight: true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54.323\" height=\"36.231\" viewBox=\"0 0 54.323 36.231\">\n" +
            "  <path id=\"left-arrow-white\" d=\"M35.537,19.68a2.466,2.466,0,0,1-3.472.019L20.574,8.246V51.889a2.453,2.453,0,0,1-4.906,0V8.246L4.177,19.718A2.483,2.483,0,0,1,.705,19.7a2.443,2.443,0,0,1,.019-3.453L16.385.7h0a2.754,2.754,0,0,1,.774-.509A2.341,2.341,0,0,1,18.1,0a2.459,2.459,0,0,1,1.717.7L35.48,16.246A2.4,2.4,0,0,1,35.537,19.68Z\" transform=\"translate(0 36.231) rotate(-90)\" fill=\"#fff\"/>\n" +
            "</svg>\n","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54.323\" height=\"36.231\" viewBox=\"0 0 54.323 36.231\">\n" +
            "  <path id=\"right-arrow-white\" d=\"M35.537,34.643a2.466,2.466,0,0,0-3.472-.019L20.574,46.078V2.434a2.453,2.453,0,0,0-4.906,0V46.078L4.177,34.605a2.483,2.483,0,0,0-3.472.019,2.443,2.443,0,0,0,.019,3.453L16.385,53.625h0a2.754,2.754,0,0,0,.774.509,2.341,2.341,0,0,0,.943.189,2.459,2.459,0,0,0,1.717-.7L35.48,38.077A2.4,2.4,0,0,0,35.537,34.643Z\" transform=\"translate(0 36.231) rotate(-90)\" fill=\"#fff\"/>\n" +
            "</svg>\n"],
            items:1,
            responsive:{
                0:{
                    items:1,
                    loop:true,
                },
            }
        });
    }
}


// Number_dez_owl_slider
function number_dez_owl_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".number_dez_owl");

    if (checkWidth >= 992) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 991) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop:false,
            margin:0,
            dots: true,
            nav: true,
            autoHeight: true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54.323\" height=\"36.231\" viewBox=\"0 0 54.323 36.231\">\n" +
            "  <path id=\"left-arrow-white\" d=\"M35.537,19.68a2.466,2.466,0,0,1-3.472.019L20.574,8.246V51.889a2.453,2.453,0,0,1-4.906,0V8.246L4.177,19.718A2.483,2.483,0,0,1,.705,19.7a2.443,2.443,0,0,1,.019-3.453L16.385.7h0a2.754,2.754,0,0,1,.774-.509A2.341,2.341,0,0,1,18.1,0a2.459,2.459,0,0,1,1.717.7L35.48,16.246A2.4,2.4,0,0,1,35.537,19.68Z\" transform=\"translate(0 36.231) rotate(-90)\" fill=\"#fff\"/>\n" +
            "</svg>\n","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54.323\" height=\"36.231\" viewBox=\"0 0 54.323 36.231\">\n" +
            "  <path id=\"right-arrow-white\" d=\"M35.537,34.643a2.466,2.466,0,0,0-3.472-.019L20.574,46.078V2.434a2.453,2.453,0,0,0-4.906,0V46.078L4.177,34.605a2.483,2.483,0,0,0-3.472.019,2.443,2.443,0,0,0,.019,3.453L16.385,53.625h0a2.754,2.754,0,0,0,.774.509,2.341,2.341,0,0,0,.943.189,2.459,2.459,0,0,0,1.717-.7L35.48,38.077A2.4,2.4,0,0,0,35.537,34.643Z\" transform=\"translate(0 36.231) rotate(-90)\" fill=\"#fff\"/>\n" +
            "</svg>\n"],
            items:1,
            responsive:{

                0:{

                    items:1,
                },
                575:{
                    items:2,
                },
                767:{
                    items:2,

                },
            }
        });
    }
}





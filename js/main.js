(function ($) {
  "use strict";

  /*---------------------
   TOP Menu Stick
  --------------------- */
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function () {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
   Navbar nav active link behavior
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li");
  main_menu.on('click', function () {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });

  /*----------------------------
   Dropdown click handling for Services page
  ------------------------------ */
  $('.dropdown-toggle').on('click', function (e) {
    var $el = $(this).parent(); 
    var isActive = $el.hasClass('open');
    if (isActive) {
      // If the dropdown is already open, prevent default link behavior
      e.preventDefault();
    }
    $el.toggleClass('open');
  });

  // Close dropdown on clicking outside
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.dropdown').length) {
      $('.dropdown').removeClass('open');
    }
  });

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.header-area');
    const heroSectionHeight = document.querySelector('.nivoSlider').offsetHeight;
    
    if (window.scrollY > heroSectionHeight) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /*----------------------------
   Smooth Scroll to Sections
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function (event) {
    var $anchor = $(this);
    var target = $($anchor.attr('href'));

    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 55 // Adjusts for fixed header height
      }, 1500, 'easeInOutExpo');
    }
    
    event.preventDefault();
  });

  /*----------------------------
   Navbar collapse behavior on mobile
  ------------------------------ */
  $(".navbar-collapse a:not(.dropdown-toggle)").on('click', function () {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  /*----------------------------
   Nivo Slider Initialization (if used)
  ------------------------------ */
  $('#ensign-nivoslider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
  });

  /*----------------------------
   Scrollspy for section highlighting in navbar
  ------------------------------ */
  $('body').scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

  /*----------------------------
   Back to top button
  ------------------------------ */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Testimonial Carousel (if used)
  ------------------------------ */
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  /*----------------------------
   Isotope for Portfolio (if used)
  ------------------------------ */
  $(window).on("load", function () {
    var $container = $('.awesome-project-content');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    var pro_menu = $('.project-menu li a');
    pro_menu.on("click", function () {
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      pro_menu.removeClass('active');
      $(this).addClass('active');
      return false;
    });
  });

})(jQuery);

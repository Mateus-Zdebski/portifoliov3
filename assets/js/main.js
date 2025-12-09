$(document).ready(function () {

    // Initialize Particles.js (Spider Web Effect)
    if ($('#particles-js').length) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00f3ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00f3ff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab" /* Spider web effect on hover */
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Initialize WOW.js

    new WOW().init();

    // Initialize Owl Carousel
    $('.projects-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Initialize Nice Select
    $('select').niceSelect();

    // Initialize Magnific Popup (for future gallery use, or button example)
    // Example usage for project details if they were links to images/ajax
    $('.btn-details').magnificPopup({
        type: 'inline',
        midClick: true
    });

    // Mobile Menu Toggle
    $('.hamburger').click(function () {
        $('.nav-links').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // Close mobile menu on link click
    $('.nav-links li a').click(function () {
        $('.nav-links').removeClass('active');
        $('.hamburger i').removeClass('fa-times').addClass('fa-bars');
    });

    // Sticky Header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header').css({
                'background': 'rgba(10, 10, 10, 0.95)',
                'padding': '15px 0'
            });
        } else {
            $('.header').css({
                'background': 'rgba(10, 10, 10, 0.8)',
                'padding': '20px 0'
            });
        }
    });

    // Smooth Scrolling for anchor links
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // Neon Sparkle Effect on Click (Just a fun engineering touch)
    $(document).click(function (e) {
        // Create a small spark element
        // (Optional interaction, kept simple for performance)
    });
});

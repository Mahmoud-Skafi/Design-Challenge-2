var carousel = function () {

    $('.carousel-testimony').owlCarousel({
        autoplay: true,
        autoHeight: true,
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        dots: true,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.carousel-job').owlCarousel({
        autoplay: true,
        autoHeight: true,
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        dots: true,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
    $('.carousel-candidates').owlCarousel({
        autoplay: true,
        autoHeight: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        dots: true,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

};
carousel();
$("#search-job-btn").click(() => {
    $("#search-job-btn").addClass("skafi-active");
    $("#search-candidate-btn").removeClass("skafi-active");

    $(".search-job-form").css("display", "block");
    $(".search-candidate-form").css("display", "none");
});

$("#search-candidate-btn").click(() => {
    $("#search-candidate-btn").addClass("skafi-active");
    $("#search-job-btn").removeClass("skafi-active");

    $(".search-candidate-form").css("display", "block");
    $(".search-job-form").css("display", "none");
});
var header = document.getElementById("jb-navbar");
window.addEventListener('scroll', function () {
    header.classList.add('fixed-top', window.scrollY > 200);
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {

        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
    prevScrollpos = currentScrollPos;
}
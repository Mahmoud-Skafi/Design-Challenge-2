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
// window.addEventListener('scroll', function () {
//     header.classList.add('sticky', window.scrollY > 100000);
//     console.log("skafi")
// });

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos <= 0) {
        header.classList.remove('sticky');
    }
    else if (currentScrollPos > 360) {
        header.classList.add('sticky');
    }
    // if (prevScrollpos > currentScrollPos) {

    //     header.classList.add('sticky');
    // } else {
    //     header.classList.remove('sticky');
    // }
    prevScrollpos = currentScrollPos;
}
// var count = document.getElementById('count');
// var obj = 10650;
// var cur = parseInt(count.innerHTML);


// setInterval(() => {
//     if (cur <= obj) {
//         cur = cur + 156;
//         count.innerHTML = cur;
//     }
// }, 100);
var currentJobsNumber = 0;
var finalJobsNumber = 10650;
function increaseJobs() {
    let currentJobsNumberText = currentJobsNumber.toString();

    if (currentJobsNumberText.length > 3) {
        let a = "";
        let b = "";
        for (var i = currentJobsNumberText.length - 1; i > currentJobsNumberText.length - 1 - 3; i--)
            a = currentJobsNumberText[i] + a;
        for (var i = currentJobsNumberText.length - 1 - 3; i >= 0; i--)
            b = currentJobsNumberText[i] + b;
        currentJobsNumberText = b + "," + a;
    }
    $("#count").html(currentJobsNumberText);
    if (currentJobsNumber >= finalJobsNumber)
        return;
    if (currentJobsNumber + 72 <= finalJobsNumber) {
        currentJobsNumber += 72;
        setTimeout(() => {
            increaseJobs();
        }, 30);
    }
    else {
        currentJobsNumber += 1;
        setTimeout(() => {
            increaseJobs();
        }, 20);
    }
}
increaseJobs();
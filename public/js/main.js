var slideIndex = 0;
var autoSlider = true;
var slideTimer

slidetest();

// Html collection to array
function collectionToArr(collection) {
    return [].slice.call(collection);
}

function slidetest() {
    const elements = document.getElementsByClassName("mySlides");
    var slides = collectionToArr(elements);
    slides.forEach((slide, index) => {
        if (slideIndex > elements.length - 1) {
            slideIndex = 0;
        }
        if (slideIndex === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
    // timer will be cleared in other methods
    slideTimer = setTimeout(() => {
        slideIndex += 1;
        slidetest();
    }, 6000)
}

// Next/previous controls
function plusSlides(n) {
    const elements = document.getElementsByClassName("mySlides");
    clearTimeout(slideTimer);
    slideIndex += n;
    if (slideIndex > elements.length - 1) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = elements.length - 1;
    }
    slidetest();
}

// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(slideTimer);
    slideIndex = n - 1;
    slidetest();
}
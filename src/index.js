require("normalize.css/normalize.css");
require("./styles/index.scss");

document.addEventListener("DOMContentLoaded", function() {
    var clickedNumber = 0;
    var array = [
        "¥11,000（税込）以上お買い上げで送料無料",
        "今なら時計のギフトラッピングが無料！",
        "メールを登録して10% Offクーポンを手に入れよう!"
    ];
    var currentPositionNumber = 0;
    var carouselPromotion = document.querySelector(".carousel-promotion");
    // put the message into html
    carouselPromotion.innerHTML = array[currentPositionNumber];
    var headerCarousel = document.querySelector(".page-header__carousel");
    headerCarousel.addEventListener("click", function(event) {
        var clickedElement = event.target;

        // if the clicked element is not the arrow button
        // then we stop here.
        if (!clickedElement.classList.contains("carousel-indicator")) {
            return false;
        }

        // increase clickedNumber
        clickedNumber = clickedNumber + 1;

        // this part, helps us to know which arrow is clicked.
        // then we can get the correct currentPositionNumber
        if (clickedElement.classList.contains("carousel-indicator--next")) {
            if (currentPositionNumber === array.length - 1) {
                currentPositionNumber = 0;
            } else {
                // currentPositionNumber increases
                currentPositionNumber = currentPositionNumber + 1;
            }
        }
        if (clickedElement.classList.contains("carousel-indicator--prev")) {
            if (currentPositionNumber === 0) {
                currentPositionNumber = array.length - 1;
            } else {
                currentPositionNumber = currentPositionNumber - 1;
            }
        }

        // put the right message into html
        // carouselPromotion.innerHTML = array[currentPositionNumber];

        // 1st step
        // create a new element, and put it below current element
        var newCarouselPromotion = document.createElement("p");
        newCarouselPromotion.classList.add("carousel-promotion");
        newCarouselPromotion.innerHTML = array[currentPositionNumber];

        // 2nd step
        // put new element into wrap, and move up wrap
        var carouselPromotionMain = document.querySelector(
            ".carousel-promotion-main"
        );
        carouselPromotionMain.appendChild(newCarouselPromotion);
        var textHeight = 14;
        var moveupDistance = textHeight * clickedNumber;
        carouselPromotionMain.style.transform = `translateY(${-1 *
            moveupDistance}px)`;
    });
});

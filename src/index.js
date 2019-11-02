require("normalize.css/normalize.css");
require("./styles/index.scss");

import handleHeaderCarousel from "./components/headerCarousel/headerCarousel.js";

document.addEventListener("DOMContentLoaded", function() {
    handleHeaderCarousel();
});

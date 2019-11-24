require("normalize.css/normalize.css");
require("./styles/index.scss");

import handleHeaderCarousel from "./components/headerCarousel/headerCarousel.js";
import headerMain from "./components/headerMain/headerMain.js";

document.addEventListener("DOMContentLoaded", function() {
    handleHeaderCarousel();
    headerMain();
});

import "../styles/list.scss";

import headSearchModule from "../modules/headSearch";
import Slider from "../modules/slider";

(function() {
    new Slider({
        delay: 2500,
        loop: true,
        autoPlay: true,
    }).init();

    headSearchModule.init();
})();
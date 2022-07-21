import "../styles/index.scss";

import headSearchModule from "../modules/headSearch";
import Slider from "../modules/slider";
import agencyModel from "../modules/agency";
import courseNavModel from "../modules/courseNav";

(function() {
    new Slider({
        delay: 2500,
        loop: true,
        autoPlay: true,
    }).init();

    agencyModel.init();
    courseNavModel.init();
    headSearchModule.init({ open: true });
})();
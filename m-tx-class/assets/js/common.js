import FastClick from "./fastclick";

document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 37.5 + "px";

window.addEventListener(
    "load",
    function() {
        FastClick.attach(document.body);
    },
    false
);

window.addEventListener(
    "touchmove",
    function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    },
    false
);
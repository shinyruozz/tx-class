import $ from "jquery";
class Slider {
    constructor(options) {
        this.$carousel = $(".J_carousel_wrap");
        this.$carouselList = $(".J_carousel_list");
        this.$carouselItem = this.$carouselList.find(".carousel-item");
        this.$direcTorBtns = this.$carousel.find(".iconfont");
        this.$indicators = this.$carousel.find(".indicator-item");

        this.loop = options.loop;
        this.delay = options.delay;
        this.curIdx = 0;
        this.autoPlay = options.autoPlay;
        this.timer = null;
    }

    init() {
        this.autoPlay && this._autoPlay();
        this._bindEvent();
    }

    _bindEvent() {
        this.$carousel.on("mouseenter", $.proxy(this.carouselEnter, this));
        this.$carousel.on("mouseleave", $.proxy(this.carouselLeave, this));
        this.$carousel.on("click", $.proxy(this.carouselClick, this));
    }
    carouselEnter() {
        clearInterval(this.timer);
        this.timer = null;
    }
    carouselLeave() {
        this._autoPlay();
    }
    carouselClick(e) {
        const ev = e || window.event,
            tar = ev.target,
            className = tar.className;
        switch (className) {
            case "iconfont icon-arrow-left":
                this.setIndex("prev");
                break;
            case "iconfont icon-arrow-right":
                this.setIndex("next");
                break;
            case "indicator-item":
                console.log(1111);
                this.curIdx = $(tar).index();
                console.log(this.curIdx);
                this.slideAction(this.curIdx);
                break;
            default:
                break;
        }
    }

    _autoPlay() {
        this.timer = setInterval(() => {
            this.setIndex("next");
        }, this.delay);
    }

    setIndex(field) {
        const len = this.$carouselItem.length;
        switch (field) {
            case "next":
                this.curIdx = this.curIdx == len - 1 ? 0 : this.curIdx + 1;
                break;
            case "prev":
                this.curIdx = this.curIdx == 0 ? len - 1 : this.curIdx - 1;
                break;
            default:
                break;
        }
        this.slideAction(this.curIdx);
    }

    slideAction(index) {
        this.$carouselItem.eq(index).fadeIn(500).siblings().fadeOut(500);
        this.$indicators.eq(index).addClass("current").siblings().removeClass("current");
    }
}

export default Slider;
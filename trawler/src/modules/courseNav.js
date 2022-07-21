import $ from "jquery";
import courseItemTpl from "../templates/courseItem.tpl";
import noDataTip from "../templates/noDataTip.tpl";
import { tplReplace, getLocaHash, setLocaHash } from "../utils/tools";
import { IMG_BASE_URL } from "../config/index";

const courseNavModule = (function() {
    const $courseTab = $(".nav-tabs"),
        $courseList = $(".J_courseList"),
        $tabItems = $courseTab.find(".tab-item"),
        courseData = $.parseJSON($("#J_courseData").html());

    console.log(courseData);
    const init = (opt) => {
        // const field = opt.field;
        addCurClass();
        bindEvent();
    };

    function bindEvent() {
        $courseTab.on("click", courseTabClick);
        // window.addEventListener("hashchange", hashchangeHandle);
    }

    //tab 点击
    function courseTabClick(e) {
        const ev = e || window.event,
            tar = ev.target,
            className = tar.className;

        if (className == "tab-item") {
            const field = $(tar).attr("data-field");
            setLocaHash({
                cate: field,
            });
            checkedAction(field);
        }
    }

    function checkedAction(field) {
        addCurClass(field);
        renderCourse(filterData(field));
    }

    function addCurClass(field) {
        console.log(field);
        $tabItems.each((index, elem) => {
            const $elem = $(elem);
            if ($elem.attr("data-field") == field) {
                $elem.addClass("current").siblings().removeClass("current");
            }
        });
    }

    function renderCourse(data) {
        let str = "";
        if (data && data.length > 0) {
            data.forEach((item, i) => {
                console.log(item);
                str += tplReplace(courseItemTpl, {
                    title: item.title,
                    posterKey: IMG_BASE_URL + item.posterKey,
                    href: item.href,
                    price: item.price == 0 ? "免费" : "￥" + item.price,
                    studentCount: item.studentCount || 0,
                });
            });
        } else {
            str += noDataTip();
        }

        $courseList.html(str);
    }

    function filterData(field) {
        if (field == 1) {
            return courseData;
        }
        return courseData.filter((item, index) => {
            return item.field == field;
        });
    }

    return {
        init,
        checkedAction,
    };
})();

export default courseNavModule;
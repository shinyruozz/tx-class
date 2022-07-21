import $ from "jquery";
import { getLocaHash, setLocaHash } from "../utils/tools";

import courseNavModule from "./courseNav";

const agencyModel = (function() {
    const $agencyList = $(".agency-list");
    const $agencyItems = $agencyList.find(".agency-item");
    const $agencyMainTabs = $(".agency-tab");

    function init() {
        initRender();
        bindEvent();
    }

    function initRender() {
        let { tab = 0, cate = 1 } = getLocaHash();
        if (tab < 0 || tab > 3) {
            tab = 0;
        }
        if (tab == 1) {
            courseNavModule.checkedAction(cate);
        }
        toggleMainTab(tab);
    }

    function bindEvent() {
        $agencyList.on("click", agencyHandleClick);
    }

    //切换机构tab点击切换
    function agencyHandleClick(e) {
        const ev = e || window.event,
            tar = ev.target,
            className = tar.className;

        if (className == "agency-item") {
            const index = $(tar).index();
            const $agencyItem = $($agencyItems[index]);
            const field = $agencyItem.attr("data-field");
            console.log(index);

            toggleMainTab(index);
            //点击改变hash
            changeHash(field);
        }
    }

    //根据点击的tab 切换对应的main
    function toggleMainTab(index) {
        //设置tab 样式
        $agencyItems.eq(index).addClass("current").siblings().removeClass("current");
        $agencyMainTabs.eq(index).show().siblings().hide();
    }

    //改变hash
    function changeHash(field) {
        // 选中课程tab item
        if (field == 1) {
            // cate 为全部课程分类
            const { cate = 1 } = getLocaHash();
            cate != 1 ? setLocaHash({ tab: field }) : setLocaHash({ tab: field, cate });
            //渲染课程
            courseNavModule.checkedAction(cate);
        } else {
            setLocaHash({ tab: field });
        }
    }

    return {
        init,
    };
})();

export default agencyModel;
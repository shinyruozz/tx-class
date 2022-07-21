import $ from "jquery";
import { trimSpace } from "../utils/tools";
const { local } = require("../../config/conf");
const headSearchModule = (function() {
    const $searchInput = $(".J_search_input"),
        $searchBtn = $(".J_search-btn");

    let options = null;
    const init = (opt) => {
        options = opt || {};
        bindEvent();
    };

    function bindEvent() {
        $searchBtn.on("click", searchBtnClick);
        $searchInput.on("keydown", searchEnter);
    }

    //搜索按回车
    function searchEnter(e) {
        let ev = e || window.event;
        const keyCode = ev.keyCode;
        // 回车
        if (keyCode == 13) {
            searchBtnClick();
        }
    }

    function searchBtnClick() {
        let inputVal = trimSpace($searchInput.val());
        if (inputVal.length > 0) {
            if (options.open) {
                window.open(local + "list/" + inputVal);
            } else {
                window.location.href = local + "list/" + inputVal;
            }
            $searchInput.val("");
        }
    }
    return {
        init,
    };
})();

export default headSearchModule;
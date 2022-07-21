function getLocaHash() {
    let hash = location.hash;
    if (!hash) {
        return {};
    }
    let obj = {};
    hash.substring(1)
        .split("&")
        .map((item) => {
            const res = item.split("=");
            obj[res[0]] = res[1];
        });

    return obj;
}

function setLocaHash(obj) {
    const hashInfo = getLocaHash();
    let url = "http://" + location.host + "#";
    Object.assign(hashInfo, obj);
    for (let k in hashInfo) {
        url += k + "=" + hashInfo[k] + "&";
    }

    window.location = url.slice(0, -1);
}

function tplReplace(tpl, data) {
    return tpl().replace(/\{\{(.+?)\}\}/g, function(node, key) {
        return data[key];
    });
}

function trimSpace(str) {
    return str.replace(/\s+/g, "");
}

export { getLocaHash, tplReplace, setLocaHash, trimSpace };
const seq = require("../connection/mysql");
const { INT, STRING } = require("../types");

const Collection = seq.define("Collection", {
    cid: {
        type: INT,
        unique: true,
        allowNull: false,
    },
    title: {
        type: STRING,
        allowNull: false,
    },
    info: {
        type: STRING,
    },
    qqQunLink: {
        type: STRING,
    },
    courseIdList: {
        type: STRING,
    },
    maskKey: {
        type: STRING,
    },
    state: {
        type: STRING,
        defaultValue: 1,
    },
});

// Collection.sync({ force: true });

module.exports = Collection;
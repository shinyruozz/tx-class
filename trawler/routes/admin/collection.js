const Router = require("koa-router");

const {
    getCollections,
    getCollection,
    addCollection,
    editCollection,
    removeCollection,
} = require("../../controllers/admin/collection");
const router = new Router({ prefix: "/collection" });

router.get("/", getCollections);
router.get("/:id", getCollection);
router.put("/:id", editCollection);
router.delete("/:id", removeCollection);
router.post("/", addCollection);

module.exports = router;
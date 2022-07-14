const Router = require("koa-router");

const { getAgency, editAgency } = require("../../controllers/admin/agency");
const router = new Router({ prefix: "/agency" });

router.get("/", getAgency);
// router.get("/:id", getCollection);
router.put("/", editAgency);
// router.delete("/:id", removeCollection);
// router.post("/", addCollection);

module.exports = router;
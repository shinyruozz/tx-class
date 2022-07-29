const adminRouter = require("./admin");
const crawlerRouter = require("./crawler");
const mobileRouter = require("./mobile");
const pcRouter = require("./pc");

function appRouter(app) {
    app.use(crawlerRouter.routes(), crawlerRouter.allowedMethods());
    app.use(adminRouter.routes(), adminRouter.allowedMethods());
    app.use(mobileRouter.routes(), mobileRouter.allowedMethods());
    app.use(pcRouter.routes(), pcRouter.allowedMethods());
}

module.exports = appRouter;
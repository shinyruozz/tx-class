const Koa = require("koa");
const app = new Koa();
const path = require("path");
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const koaBody = require("koa-body");
const logger = require("koa-logger");
const sesstion = require("koa-generic-session");
const koaReids = require("koa-redis");
const cors = require("koa-cors");

const { sessionInfo, cookiesInfo, redisInfo } = require("./config/conf");

const crawlerRouter = require("./routes/crawler");
const indexRouter = require("./routes/index.js");
const adminRouter = require("./routes/admin.js");
// error handler
onerror(app);

app.keys = [sessionInfo.key];

//跨域
app.use(
    cors({
        // origin: function() {
        //     return "*";
        // },
        credentials: true,
    })
);

//配置session 中间件
app.use(
    sesstion({
        key: sessionInfo.name,
        prefix: sessionInfo.prefix, // redis key 前缀
        cookie: cookiesInfo,
        store: koaReids({
            ...redisInfo,
        }),
    })
);
// middlewares
app.use(
    // bodyparser({
    //     enableTypes: ["json", "form", "text"],
    // })
    koaBody({
        multipart: true,
        formidable: {
            uploadDir: path.join(__dirname, "/upload"),
            keepExtensions: true,
        },
        parsedMethods: ["POST", "PUT", "PATCH", "DELETE", "GET"],
    })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));
app.use(require("koa-static")(__dirname + "/upload"));

app.use(
    views(__dirname + "/views", {
        extension: "ejs",
    })
);

// logger
app.use(async(ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(crawlerRouter.routes(), crawlerRouter.allowedMethods());
app.use(indexRouter.routes(), indexRouter.allowedMethods());
app.use(adminRouter.routes(), adminRouter.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
    console.error("server error", err, ctx);
    ctx.status = 400;
    ctx.body = err;
});

module.exports = app;
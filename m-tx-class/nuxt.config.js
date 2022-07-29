export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "m-tx-class",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            { hid: "description", name: "description", content: "js++WEB移动端" },
            {
                name: "viewport",
                content: "initial-scale=1.0,maximun-scale=1.0,minimum-scale=1.0,user-scalable=no",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    server: {
        port: 3003,
        host: "0.0.0.0",
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/styles/resets.css",
        "@/assets/styles/border.css",
        "@/assets/styles/commom.scss",
        "@/assets/styles/iconfont.css",
        "swiper/dist/css/swiper.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "@/assets/js/common.js", mode: "client" },
        { src: "@/plugins/axios.js", mode: "click" },
        { src: "@/plugins/swiper.js", mode: "client" },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: process.env.NODE_ENV == "development" ? "http://localhost:3000/" : "????",
    },

    proxy: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
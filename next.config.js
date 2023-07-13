const { initialize } = require('next/dist/server/lib/render-server')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    env: {
        ZAPATITOS_API_KEY: "AIzaSyCFd5o5jwYQIbOA3dIiMZSDSZfnSIpO5oM",
        ZAPATITOS_AUTH_DOMAIN: "paginaweb-ce1eb.firebaseapp.com",
        ZAPATITOS_PROJECTID: "paginaweb-ce1eb",
        ZAPATITOS_STORAGEBUCKET: "paginaweb-ce1eb.appspot.com",
        ZAPATITOS_MESSAGIN_SENDERID: "747930257433",
        ZAPATITOS_APPID: "1:747930257433:web:c4d2b66c9e12e54c128288",
        ZAPATITOS_MEASUREMENTID: "G-TR48VPPYFY"
    }
} 

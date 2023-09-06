/** @type {import('next').NextConfig} */
const nextConfig = {}
const withPWA = require("next-pwa");



module.exports =

 withPWA ({
    pwa: {
        dist:"public",
        register:true,
        skipWaiting: true
    },
    nextConfig 
});



// {

// nextConfig,withPWA
// }


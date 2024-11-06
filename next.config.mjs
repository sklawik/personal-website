/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig:{
        PORT: process.env.PORT || 3000
    }
};

export default nextConfig;

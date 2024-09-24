/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig:{
        PORT: process.env.PORT
    }
};

export default nextConfig;

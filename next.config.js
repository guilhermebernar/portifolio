/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    trailingSlash: true,
    output: 'export',
    basePath: isProd ? '/portifolio' : '',
    assetPrefix: isProd ? '/portifolio/' : '',
}


module.exports = nextConfig

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    trailingSlash: true,
    output: 'export',
    basePath: isProd ? '/portifolio' : '',
    assetPrefix: isProd ? '/portifolio/' : '',
}


module.exports = nextConfig

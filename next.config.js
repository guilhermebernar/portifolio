const nextConfig = {
  esModule: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp4$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/videos/[hash][ext][query]',
      },
    });
    return config;
  },
};

module.exports = nextConfig;

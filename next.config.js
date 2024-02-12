const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: "export",
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

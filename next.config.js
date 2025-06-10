/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? '/speed-reading-hub' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/speed-reading-hub/' : '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Вимкнення перевірок для швидшої збірки
  swcMinify: true,
  reactStrictMode: false,
};

module.exports = nextConfig;

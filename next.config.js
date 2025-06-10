/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'urielskiy.github.io',
      },
    ],
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
  reactStrictMode: false,
};

module.exports = nextConfig;

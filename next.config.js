/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Налаштування базового шляху для GitHub Pages
  basePath: process.env.GITHUB_ACTIONS ? '/speed-reading-hub' : '',
  // Налаштування для статичного експорту
  images: {
    unoptimized: true,
  },
  // Додаткові налаштування для сумісності з GitHub Pages
  assetPrefix: process.env.GITHUB_ACTIONS ? '/speed-reading-hub/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;

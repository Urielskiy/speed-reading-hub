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
  // Вимкнення перевірки ESLint під час збірки
  eslint: {
    // Попередження ESLint не викликатимуть помилку збірки
    ignoreDuringBuilds: true,
  },
  // Вимкнення перевірки TypeScript під час збірки
  typescript: {
    // Попередження TypeScript не викликатимуть помилку збірки
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

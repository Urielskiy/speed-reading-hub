/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Налаштування базового шляху для GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/speed-reading-hub' : '',
  // Налаштування для статичного експорту
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

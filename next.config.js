// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

 const {i18n} =require('./next-i18next.config');

 /** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost:1337',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
  },
  i18n,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

 

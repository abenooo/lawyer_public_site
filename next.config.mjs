/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Ensure trailing slashes for all routes
  async rewrites() {
    return [
      {
        source: '/news/:id',
        destination: '/news/[id]',
      },
    ];
  },
};

module.exports = nextConfig;

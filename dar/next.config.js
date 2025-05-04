/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    appDir: true,
    reactRoot: true
  }
};

module.exports = nextConfig;
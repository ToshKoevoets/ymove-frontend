/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API: 'https://www.api.makkie.baboom.nl'
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/api/login",
        permanent: true,
      },
      {
        source: "/oauth/login",
        destination: "/api/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

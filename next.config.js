/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API: 'http://localhost:8111', //process.env.API
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
      {
        permanent: true,
        source: "/public/editor.html",
        destination: "/pages/api/editor.js",
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`cdn.sanity.io`],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Homepage",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
